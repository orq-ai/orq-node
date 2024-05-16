import { createParser } from "eventsource-parser";
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
import { Store, safeJSONParse } from "../utils";

const DEPLOYMENTS_GET_CONFIG = "deployments/get_config";
const DEPLOYMENTS_INVOKE = "deployments/invoke";

const buildAddMetricsUrl = (id: string) => `deployments/${id}/metrics`;

export type InvokeDeploymentParams = DeploymentCommon & {
	key: string;
	context?: Record<string, unknown>;
	metadata?: Record<string, unknown>;
	inputs?: Record<string, string>;
	messages?: DeploymentMessage[];
	extra_params?: Record<string, unknown>;
};

function buildDeploymentRequestBody(params: InvokeDeploymentParams) {
	return {
		key: params.key,
		...(params.context && { context: params.context }),
		...(params.metadata && { metadata: params.metadata }),
		...(params.inputs && { inputs: params.inputs }),
		...(params.messages && { messages: params.messages }),
		...(params.extra_params && { extra_params: params.extra_params }),
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

			return await response.json();
		} catch (err) {
			handleRequestError(err);
			return;
		}
	}
}

export class DeploymentPromptConfig
	extends BaseDeployment
	implements DeploymentConfiguration
{
	messages: DeploymentMessage[];
	model: string;
	provider: DeploymentProvider;
	parameters: Record<DeploymentParameter, DeploymentParameter>;
	type: DeploymentModelType;
	tools?: DeplomentToolCall[] | undefined;

	constructor(private config: DeploymentPromptConfig) {
		super(config.id);

		this.messages = this.config.messages;
		this.model = this.config.model;
		this.provider = this.config.provider;
		this.parameters = this.config.parameters;
		this.type = this.config.type;
		this.tools = this.config.tools;
	}
}

export class DeploymentGeneration
	extends BaseDeployment
	implements DeploymentResponse
{
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

export class Deployment {
	public async getConfig(
		params: InvokeDeploymentParams,
	): Promise<DeploymentPromptConfig | undefined> {
		try {
			const response = await createHttpRequest({
				method: "POST",
				apiKey: Store.apiKey,
				url: DEPLOYMENTS_GET_CONFIG,
				data: buildDeploymentRequestBody(params),
			});

			const config = await response.json();

			return new DeploymentPromptConfig(config);
		} catch (err) {
			handleRequestError(err);
			return;
		}
	}

	public async invoke(
		params: InvokeDeploymentParams,
	): Promise<DeploymentGeneration | undefined> {
		try {
			const response = await createHttpRequest({
				method: "POST",
				apiKey: Store.apiKey,
				url: DEPLOYMENTS_INVOKE,
				data: buildDeploymentRequestBody(params),
			});

			if (!response.ok) {
				const errorResponse = await response.json();
				handleRequestError(errorResponse);
			}

			const generation = await response.json();

			return new DeploymentGeneration(generation);
		} catch (err) {
			handleRequestError(err);
			return;
		}
	}

	public async *invokeWithStream(
		params: InvokeDeploymentParams,
	): AsyncGenerator<DeploymentGeneration> {
		const response = await createHttpRequest({
			method: "POST",
			apiKey: Store.apiKey,
			url: DEPLOYMENTS_INVOKE,
			data: {
				...buildDeploymentRequestBody(params),
				stream: true,
			},
		});

		if (!response.ok) {
			const errorResponse = await response.json();
			handleRequestError(errorResponse);
		}

		const reader = response.body?.getReader();
		const queue: DeploymentResponse[] = [];
		let streamEnded = false;

		const parser = createParser((event) => {
			if (event.type === "event") {
				const jsonValue = event.data;
				const parsedObject = safeJSONParse(jsonValue);
				if (parsedObject) {
					queue.push(parsedObject);
				}
			}
		});

		async function readStream() {
			if (!reader) {
				throw new Error("Failed to create a readable stream.");
			}

			while (true) {
				const { done, value } = await reader.read();

				if (done) {
					streamEnded = true;
					break;
				}

				const text = new TextDecoder().decode(value);
				parser.feed(text);
			}
		}

		// Start reading the stream asynchronously
		readStream();

		// Yield objects from the queue as they become available
		while (true) {
			while (queue.length > 0) {
				const parsedObject = queue.shift();
				if (parsedObject) {
					yield new DeploymentGeneration(parsedObject);
				}
			}

			if (streamEnded && queue.length === 0) {
				break;
			}

			// Sleep briefly to prevent a tight loop if the queue is empty
			await new Promise((resolve) => setTimeout(resolve, 10));
		}
	}
}
