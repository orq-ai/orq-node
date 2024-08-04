interface LLMCallPromptConfig {
	stream: boolean;
	model: string;
	model_type: string;
	model_parameters: Record<string, unknown>;
	provider: string;
	messages: Array<Record<string, unknown>>;
}

interface MessageChoiceContent {
	role: string;
	content: string;
}

interface MessageChoiceImage {
	role: string;
	url: string;
}

interface ToolCallFunction {
	name: string;
	arguments: string;
}

interface MessageChoiceToolCall {
	id?: string;
	index?: number;
	type: "function";
	function: ToolCallFunction;
}

interface MessageChoiceToolCalls {
	role: string;
	content?: string;
	tool_calls: MessageChoiceToolCall[];
}

type MessageChoiceMessage =
	| MessageChoiceContent
	| MessageChoiceImage
	| MessageChoiceToolCalls;

interface MessageChoice {
	index: number;
	message: MessageChoiceMessage;
	finish_reason: string;
}

interface LLMCallPerformance {
	latency: number;
}

interface LLMCallUsage {
	total_tokens: number;
	prompt_tokens: number;
	completion_tokens: number;
}

interface LLMCallBilling {
	total_cost: number;
	input_cost: number;
	output_cost: number;
}

interface DeploymentInvokedData {
	prompt_config: LLMCallPromptConfig;
	choices: MessageChoice[];
	variables: { key: string; value: string; is_pii: boolean }[];
	performance: LLMCallPerformance;
	usage: LLMCallUsage;
	billing: LLMCallBilling;
	tools: unknown[];
}

interface DeploymentInvokedMetadata {
	deployment_id: string;
	deployment_variant_id: string;
	deployment_log_id: string;
	deployment_url: string;
	deployment_variant_url: string;
	deployment_log_url: string;
}

export interface WebhookDeploymentInvokedEvent {
	id: string;
	created: string;
	type: string;
	metadata: DeploymentInvokedMetadata;
	data: DeploymentInvokedData;
}

export enum WebhookEventType {
	DeploymentInvoked = "deployment.invoked",
}

export type WebhookEvent = WebhookDeploymentInvokedEvent;
