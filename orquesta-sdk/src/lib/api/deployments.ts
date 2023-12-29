import { Readable } from 'stream';
import { handleRequestError } from '../exceptions';
import { createHttpRequest } from '../http';
import {
  DeplomentToolCall,
  DeploymentChoice,
  DeploymentConfiguration,
  DeploymentMessage,
  DeploymentMetrics,
  DeploymentModelType,
  DeploymentParameter,
  DeploymentProvider,
  DeploymentResponse,
  OrquestaClientOptions,
} from '../models';
import { extractSSEData, safeJSONParse } from '../utils';

const DEPLOYMENTS_GET_CONFIG = 'deployments/get_config';
const DEPLOYMENTS_INVOKE = 'deployments/invoke';

const buildAddMetricsUrl = (id: string) => `deployments/${id}/metrics`;

export type OrquestaDeploymentParams = {
  key: string;
  context?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  inputs?: Record<string, string>;
};

function buildDeploymentRequestBody(params: OrquestaDeploymentParams) {
  return {
    key: params.key,
    ...(params.context && { context: params.context }),
    ...(params.metadata && { metadata: params.metadata }),
    ...(params.inputs && { inputs: params.inputs }),
  };
}

export abstract class BaseDeployment {
  constructor(protected options: OrquestaClientOptions, public id: string) {
    if (!id) {
      throw new Error(
        'Something went wrong while fetching the deployment. Please try again.'
      );
    }
  }

  public async addMetrics(
    metrics: DeploymentMetrics
  ): Promise<{ success: boolean } | undefined> {
    const url = buildAddMetricsUrl(this.id);

    try {
      const response = await createHttpRequest({
        method: 'POST',
        apiKey: this.options.apiKey,
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
  parameters: Record<string, DeploymentParameter>;
  type: DeploymentModelType;
  tools?: DeplomentToolCall[] | undefined;

  constructor(
    protected override options: OrquestaClientOptions,
    private config: DeploymentConfig
  ) {
    super(options, config.id);

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

  constructor(
    protected override options: OrquestaClientOptions,
    data: DeploymentResponse
  ) {
    super(options, data.id);
    this.created = data.created;
    this.provider = data.provider;
    this.model = data.model;
    this.object = data.object;
    this.finalized = data.finalized;
    this.is_final = data.is_final;
    this.choices = data.choices;
  }
}

export class Deployments {
  #commonConfig: {
    method: string;
    apiKey: string;
  };

  constructor(private options: OrquestaClientOptions) {
    this.#commonConfig = {
      method: 'POST',
      apiKey: this.options.apiKey,
    };
  }

  public async getConfig(
    params: OrquestaDeploymentParams
  ): Promise<DeploymentConfig | undefined> {
    try {
      const response = await createHttpRequest({
        ...this.#commonConfig,
        url: DEPLOYMENTS_GET_CONFIG,
        data: buildDeploymentRequestBody(params),
      });

      return new DeploymentConfig(this.options, response.data);
    } catch (err) {
      handleRequestError(err);
      return;
    }
  }

  public async invoke(
    params: OrquestaDeploymentParams
  ): Promise<Deployment | undefined> {
    try {
      const response = await createHttpRequest({
        ...this.#commonConfig,
        url: DEPLOYMENTS_INVOKE,
        data: buildDeploymentRequestBody(params),
      });

      return new Deployment(this.options, response.data);
    } catch (err) {
      handleRequestError(err);
      return;
    }
  }

  public async *invokeWithStream(
    params: OrquestaDeploymentParams
  ): AsyncGenerator<Deployment> {
    try {
      const response = await createHttpRequest({
        ...this.#commonConfig,
        url: DEPLOYMENTS_INVOKE,
        data: {
          ...buildDeploymentRequestBody(params),
          stream: true,
        },
      });

      const stream: Readable = response.data;

      for await (const chunk of stream) {
        const jsonValue = extractSSEData(chunk.toString('utf8'));
        const parsedObjects = safeJSONParse(jsonValue);
        for (const parsedObject of parsedObjects) {
          yield new Deployment(this.options, parsedObject);
        }
      }
    } catch (err) {
      handleRequestError(err);
    }
  }
}
