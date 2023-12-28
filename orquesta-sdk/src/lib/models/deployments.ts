export const enum DeploymentProvider {
  Cohere = 'cohere',
  OpenAI = 'openai',
  Anthropic = 'anthropic',
  Google = 'google',
  Azure = 'azure',
  Aws = 'aws',
  Anyscale = 'anyscale',
}

export const enum DeploymentModelType {
  Completion = 'completion',
  Chat = 'chat',
  Image = 'image',
}

export enum DeploymentParameter {
  TopK = 'topK',
  TopP = 'topP',
  Temperature = 'temperature',
  FrequencyPenalty = 'frequencyPenalty',
  PresencePenalty = 'presencePenalty',
  MaxTokens = 'maxTokens',
  NumImages = 'numImages',
  Format = 'format',
  Dimensions = 'dimensions',
  Quality = 'quality',
  Style = 'style',
}

export const enum DeploymentMessageRole {
  System = 'system',
  User = 'user',
  Assistant = 'assistant',
}

export type DeploymentMessage = {
  role: DeploymentMessageRole;
  content: string;
};

export type DeploymentToolFunctionParameters = {
  type: 'object';
  properties: Record<
    string,
    {
      type: string;
      description: string;
    }
  >;
  required: string[];
};

export type DeploymentToolFunction = {
  name: string;
  description?: string;
  parameters: DeploymentToolFunctionParameters;
};

export type DeploymentTool = {
  type: 'function';
  function: DeploymentToolFunction;
};

export type DeploymentConfiguration = {
  id: string;
  provider: DeploymentProvider;
  model: string;
  type: DeploymentModelType;
  messages: DeploymentMessage[];
  parameters: Record<string, DeploymentParameter>;
  tools?: DeploymentTool[];
};

export type DeploymentChoiceContent = {
  role: DeploymentMessageRole.Assistant;
  content: string;
};

export type DeploymentChoiceImage = {
  role: DeploymentMessageRole.Assistant;
  url: string;
};

export type DeploymentChoiceToolCall = {};

export type DeploymentChoiceToolCalls = {
  role: DeploymentMessageRole.Assistant;
  tool_calls: DeploymentChoiceToolCall;
};

export type DeploymentChoice = {
  index: number;
  message:
    | DeploymentChoiceContent
    | DeploymentChoiceImage
    | DeploymentChoiceToolCall;
  finish_reason: string;
};

/**
 * Represents the response object for a deployment.
 */
export type DeploymentResponse = Omit<
  DeploymentConfiguration,
  'tools' | 'parameters' | 'messages' | 'type'
> & {
  /**
   * The timestamp when the deployment was created.
   */
  created: string;
  /**
   * The object type of the deployment.
   */
  object: DeploymentModelType;
  /**
   * The model associated with the deployment.
   */
  model: string;
  /**
   * The provider of the deployment.
   */
  provider: DeploymentProvider;
  /**
   * Indicates whether the deployment response is the final response. Useful for streaming.
   */
  is_final: boolean;
  /**
   * The timestamp when the deployment was finalized.
   */
  finalized: string;

  /**
   * The choices returned by the deployment model
   */
  choices: DeploymentChoice[];
};

export type DeploymentMetrics = {
  feedback?: { score: number };
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens?: number;
  };
  performance?: {
    latency?: number;
    time_to_first_token?: number;
  };
  metadata?: Record<string, unknown>;
  chain_id?: string;
  conversation_id?: string;
  user_id?: string;
};
