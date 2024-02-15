import { Readable } from "stream";
import { handleRequestError } from "../exceptions";
import { createHttpRequest } from "../http";
import {
	DeplomentToolCall,
	DeploymentChoice,
	DeploymentCommon,
	DeploymentConfiguration,
	DeploymentEvent,
	DeploymentMessage,
	DeploymentModelType,
	DeploymentParameter,
	DeploymentProvider,
	DeploymentResponse,
} from "../models";
import { Store, extractSSEData, safeJSONParse } from "../utils";

const DEPLOYMENTS_GET_CONFIG = "deployments/get_config";
const DEPLOYMENTS_INVOKE = "deployments/invoke";

const buildAddMetricsUrl = (id: string) => `deployments/${id}/metrics`;

export type InvokeDeploymentParams = DeploymentCommon & {
	key: string;
	context?: Record<string, unknown>;
	metadata?: Record<string, unknown>;
	inputs?: Record<string, string>;
	messages?: DeploymentMessage[];
};

function buildDeploymentRequestBody(params: InvokeDeploymentParams) {
	return {
		key: params.key,
		...(params.context && { context: params.context }),
		...(params.metadata && { metadata: params.metadata }),
		...(params.inputs && { inputs: params.inputs }),
	};
}

export abstract class BaseDeployment {
	constructor(public id: string) {
		if (!id) {
			throw new Error(
				"Something went wrong while fetching the deployment. Please try again.",
			);
		}
	}

	public async addMetrics(
		metrics: DeploymentEvent,
	): Promise<{ success: boolean } | undefined> {
		const url = buildAddMetricsUrl(this.id);

		if (!metrics.user_id && Store.userInfo?.id) {
			metrics.user_id = Store.userInfo.id;
		}

		try {
			const response = await createHttpRequest({
				method: "POST",
				apiKey: Store.apiKey,
				url,
				data: metrics,
			});

			return response.data;
		} catch (err) {
			handleRequestError(err);
			return;
		}
	}
}

export class DeploymentConfig
	extends BaseDeployment
	implements DeploymentConfiguration
{
	messages: DeploymentMessage[];
	model: string;
	provider: DeploymentProvider;
	parameters: Record<DeploymentParameter, DeploymentParameter>;
	type: DeploymentModelType;
	tools?: DeplomentToolCall[] | undefined;

	constructor(private config: DeploymentConfig) {
		super(config.id);

		this.messages = this.config.messages;
		this.model = this.config.model;
		this.provider = this.config.provider;
		this.parameters = this.config.parameters;
		this.type = this.config.type;
		this.tools = this.config.tools;
	}
}

export class Deployment extends BaseDeployment implements DeploymentResponse {
	choices: DeploymentChoice[];
	created: string;
	model: string;
	object: DeploymentModelType;
	finalized: string;
	is_final: boolean;
	provider: DeploymentProvider;
	system_fingerprint: string | undefined;

	constructor(data: DeploymentResponse) {
		super(data.id);
		this.created = data.created;
		this.provider = data.provider;
		this.model = data.model;
		this.object = data.object;
		this.finalized = data.finalized;
		this.is_final = data.is_final;
		this.choices = data.choices;
		this.system_fingerprint = data.system_fingerprint;
	}
}

export class Deployments {
	public async getConfig(
		params: InvokeDeploymentParams,
	): Promise<DeploymentConfig | undefined> {
		try {
			const response = await createHttpRequest({
				method: "POST",
				apiKey: Store.apiKey,
				url: DEPLOYMENTS_GET_CONFIG,
				data: buildDeploymentRequestBody(params),
			});

			return new DeploymentConfig(response.data);
		} catch (err) {
			handleRequestError(err);
			return;
		}
	}

	public async invoke(
		params: InvokeDeploymentParams,
	): Promise<Deployment | undefined> {
		try {
			const response = await createHttpRequest({
				method: "POST",
				apiKey: Store.apiKey,
				url: DEPLOYMENTS_INVOKE,
				data: buildDeploymentRequestBody(params),
			});

			return new Deployment(response.data);
		} catch (err) {
			handleRequestError(err);
			return;
		}
	}

	public async *invokeWithStream(
		params: InvokeDeploymentParams,
	): AsyncGenerator<Deployment> {
		try {
			const response = await createHttpRequest({
				method: "POST",
				apiKey: Store.apiKey,
				url: DEPLOYMENTS_INVOKE,
				data: {
					...buildDeploymentRequestBody(params),
					stream: true,
				},
			});

			const stream: Readable = response.data;

			for await (const chunk of stream) {
				const jsonValue = extractSSEData(chunk.toString("utf8"));
				const parsedObjects = safeJSONParse(jsonValue);
				for (const parsedObject of parsedObjects) {
					yield new Deployment(parsedObject);
				}
			}
		} catch (err) {
			handleRequestError(err);
		}
	}
}
