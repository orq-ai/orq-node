# CreateRouterResponseResponseBody

Returns a response object or a stream of events.

## Example Usage

```typescript
import { CreateRouterResponseResponseBody } from "@orq-ai/node/models/operations";

let value: CreateRouterResponseResponseBody = {
  background: false,
  completedAt: 330587,
  createdAt: 47938,
  error: {
    code: "<value>",
    message: "<value>",
  },
  frequencyPenalty: 2674.08,
  id: "<id>",
  incompleteDetails: {
    reason: "<value>",
  },
  instructions: "<value>",
  maxOutputTokens: 942879,
  maxToolCalls: 873699,
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  model: "Prius",
  object: "<value>",
  output: [],
  parallelToolCalls: true,
  presencePenalty: 7643.11,
  previousResponseId: "<id>",
  promptCacheKey: "<value>",
  promptCacheOptions: null,
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "fast",
  status: "queued",
  store: false,
  temperature: 3140.67,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
  ],
  topLogprobs: 228365,
  topP: 6709.08,
  truncation: "disabled",
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
  user: "Paige.Reynolds",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `background`                                                                                             | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `completedAt`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `conversation`                                                                                           | [components.ConversationParam](../../models/components/conversationparam.md)                             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `error`                                                                                                  | [components.ResponseError](../../models/components/responseerror.md)                                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `frequencyPenalty`                                                                                       | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `incompleteDetails`                                                                                      | [components.IncompleteDetails](../../models/components/incompletedetails.md)                             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `instructions`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxOutputTokens`                                                                                        | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxToolCalls`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `memory`                                                                                                 | [components.MemoryParam](../../models/components/memoryparam.md)                                         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | Record<string, *string*>                                                                                 | :heavy_check_mark:                                                                                       | Developer-defined key-value pairs attached to the response (OpenAI spec: `Map<string, string>`).         |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Always "response"                                                                                        |
| `output`                                                                                                 | *any*[]                                                                                                  | :heavy_check_mark:                                                                                       | Array of output items (messages, function calls, reasoning, etc.)                                        |
| `parallelToolCalls`                                                                                      | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `presencePenalty`                                                                                        | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `previousResponseId`                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `promptCacheKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `promptCacheOptions`                                                                                     | [components.OpenAIPromptCacheOptions](../../models/components/openaipromptcacheoptions.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `promptCacheRetention`                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `reasoning`                                                                                              | [components.Reasoning](../../models/components/reasoning.md)                                             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `safetyIdentifier`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `serviceTier`                                                                                            | [operations.CreateRouterResponseServiceTier](../../models/operations/createrouterresponseservicetier.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.CreateRouterResponseStatus](../../models/operations/createrouterresponsestatus.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `store`                                                                                                  | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `telemetry`                                                                                              | [components.ResponseTelemetry](../../models/components/responsetelemetry.md)                             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `temperature`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `text`                                                                                                   | *any*                                                                                                    | :heavy_check_mark:                                                                                       | Text output configuration including format and verbosity                                                 |
| `toolChoice`                                                                                             | *any*                                                                                                    | :heavy_check_mark:                                                                                       | Tool choice setting: "auto", "none", "required", or a specific function                                  |
| `tools`                                                                                                  | *any*[]                                                                                                  | :heavy_check_mark:                                                                                       | Array of tool configurations used in this response                                                       |
| `topK`                                                                                                   | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Only sample from the top K options for each subsequent token. Present only when set on the request.      |
| `topLogprobs`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `topP`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `truncation`                                                                                             | [operations.Truncation](../../models/operations/truncation.md)                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `usage`                                                                                                  | [components.PublicUsage](../../models/components/publicusage.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `user`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `variables`                                                                                              | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |