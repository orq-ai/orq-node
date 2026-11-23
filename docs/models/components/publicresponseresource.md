# PublicResponseResource

## Example Usage

```typescript
import { PublicResponseResource } from "@orq-ai/node/models/components";

let value: PublicResponseResource = {
  background: false,
  completedAt: 677176,
  createdAt: 793942,
  error: {
    code: "<value>",
    message: "<value>",
  },
  frequencyPenalty: 7597.55,
  id: "<id>",
  incompleteDetails: {
    reason: "<value>",
  },
  input: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  instructions: "<value>",
  maxOutputTokens: 743254,
  maxToolCalls: 611499,
  metadata: {
    "key": "<value>",
  },
  model: "Mustang",
  object: "<value>",
  output: [
    {
      "arguments": "<value>",
      "call_id": "<id>",
      "name": "<value>",
      "type": "function_call",
    },
  ],
  parallelToolCalls: true,
  presencePenalty: 7901.75,
  previousResponseId: "<id>",
  promptCacheKey: "<value>",
  promptCacheOptions: {},
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "default",
  status: "queued",
  store: true,
  temperature: 3651.77,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
  ],
  topLogprobs: 843675,
  topP: 2532.92,
  truncation: "auto",
  usage: {
    inputTokens: 276387,
    inputTokensDetails: {
      cacheCreationTokens: 49885,
      cacheWriteTokens: 905586,
      cachedTokens: 432413,
    },
    outputTokens: 725695,
    outputTokensDetails: {
      reasoningTokens: 91824,
    },
    totalTokens: 938481,
  },
  user: "Tito.Harber70",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `background`                                                                                        | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `completedAt`                                                                                       | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `conversation`                                                                                      | [components.ConversationParam](../../models/components/conversationparam.md)                        | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `error`                                                                                             | [components.ResponseError](../../models/components/responseerror.md)                                | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `frequencyPenalty`                                                                                  | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `incompleteDetails`                                                                                 | [components.IncompleteDetails](../../models/components/incompletedetails.md)                        | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `input`                                                                                             | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | Always null. Retained for compatibility with older SDKs; input content is not returned.             |
| `inputTransformations`                                                                              | [components.InputTransformation](../../models/components/inputtransformation.md)[]                  | :heavy_minus_sign:                                                                                  | Reasoning items removed by OpenAI and the reason for each removal, in input order.                  |
| `instructions`                                                                                      | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `maxOutputTokens`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `maxToolCalls`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `memory`                                                                                            | [components.MemoryParam](../../models/components/memoryparam.md)                                    | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `metadata`                                                                                          | Record<string, *string*>                                                                            | :heavy_check_mark:                                                                                  | Developer-defined key-value pairs attached to the response (OpenAI spec: `Map<string, string>`).    |
| `model`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `object`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | Always "response"                                                                                   |
| `output`                                                                                            | *components.ResponseOutputItem*[]                                                                   | :heavy_check_mark:                                                                                  | Array of output items (messages, function calls, reasoning, etc.)                                   |
| `parallelToolCalls`                                                                                 | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `presencePenalty`                                                                                   | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `previousResponseId`                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `promptCacheDiagnostics`                                                                            | [components.PromptCacheDiagnostics](../../models/components/promptcachediagnostics.md)              | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `promptCacheKey`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `promptCacheOptions`                                                                                | [components.OpenAIPromptCacheOptions](../../models/components/openaipromptcacheoptions.md)          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `promptCacheRetention`                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `reasoning`                                                                                         | [components.Reasoning](../../models/components/reasoning.md)                                        | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `safetyIdentifier`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `serviceTier`                                                                                       | [components.ServiceTier](../../models/components/servicetier.md)                                    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [components.PublicResponseResourceStatus](../../models/components/publicresponseresourcestatus.md)  | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `store`                                                                                             | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `telemetry`                                                                                         | [components.ResponseTelemetry](../../models/components/responsetelemetry.md)                        | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `temperature`                                                                                       | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `text`                                                                                              | *any*                                                                                               | :heavy_check_mark:                                                                                  | Text output configuration including format and verbosity                                            |
| `toolChoice`                                                                                        | *any*                                                                                               | :heavy_check_mark:                                                                                  | Tool choice setting: "auto", "none", "required", or a specific function                             |
| `tools`                                                                                             | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | Array of tool configurations used in this response                                                  |
| `topK`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Only sample from the top K options for each subsequent token. Present only when set on the request. |
| `topLogprobs`                                                                                       | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `topP`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `truncation`                                                                                        | [components.Truncation](../../models/components/truncation.md)                                      | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `usage`                                                                                             | [components.PublicUsage](../../models/components/publicusage.md)                                    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `user`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `variables`                                                                                         | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |