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
  frequencyPenalty: 8791.28,
  id: "<id>",
  incompleteDetails: {
    reason: "<value>",
  },
  input: [
    "<value 1>",
    "<value 2>",
  ],
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
  promptCacheRetention: null,
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "flex",
  status: "queued",
  store: true,
  temperature: 1113.75,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
  ],
  topLogprobs: 399715,
  topP: 3507.41,
  truncation: "disabled",
  usage: {
    inputTokens: 670908,
    inputTokensDetails: {
      cacheCreationTokens: 221916,
      cachedTokens: 959224,
    },
    outputTokens: 349676,
    outputTokensDetails: {
      reasoningTokens: 786005,
    },
    totalTokens: 763695,
  },
  user: "Garry8",
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
| `input`                                                                                                  | *any*[]                                                                                                  | :heavy_check_mark:                                                                                       | Array of input items (messages, function call outputs, etc.)                                             |
| `instructions`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxOutputTokens`                                                                                        | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `maxToolCalls`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `memory`                                                                                                 | [components.MemoryParam](../../models/components/memoryparam.md)                                         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | Record<string, *string*>                                                                                 | :heavy_check_mark:                                                                                       | Developer-defined key-value pairs attached to the response (OpenAI spec: Map<string, string>).           |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Always "response"                                                                                        |
| `output`                                                                                                 | *any*[]                                                                                                  | :heavy_check_mark:                                                                                       | Array of output items (messages, function calls, reasoning, etc.)                                        |
| `parallelToolCalls`                                                                                      | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `presencePenalty`                                                                                        | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `previousResponseId`                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `promptCacheKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `promptCacheRetention`                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `reasoning`                                                                                              | [components.Reasoning](../../models/components/reasoning.md)                                             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `safetyIdentifier`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `serviceTier`                                                                                            | [operations.CreateRouterResponseServiceTier](../../models/operations/createrouterresponseservicetier.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.CreateRouterResponseStatus](../../models/operations/createrouterresponsestatus.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `store`                                                                                                  | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `temperature`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `text`                                                                                                   | *any*                                                                                                    | :heavy_check_mark:                                                                                       | Text output configuration including format and verbosity                                                 |
| `toolChoice`                                                                                             | *any*                                                                                                    | :heavy_check_mark:                                                                                       | Tool choice setting: "auto", "none", "required", or a specific function                                  |
| `tools`                                                                                                  | *any*[]                                                                                                  | :heavy_check_mark:                                                                                       | Array of tool configurations used in this response                                                       |
| `topLogprobs`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `topP`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `truncation`                                                                                             | [operations.CreateRouterResponseTruncation](../../models/operations/createrouterresponsetruncation.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `usage`                                                                                                  | [components.PublicUsage](../../models/components/publicusage.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `user`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `variables`                                                                                              | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |