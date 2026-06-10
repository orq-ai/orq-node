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
  input: [
    "<value 1>",
    "<value 2>",
  ],
  instructions: "<value>",
  maxOutputTokens: 873699,
  maxToolCalls: 800452,
  metadata: {
    "key": "<value>",
  },
  model: "Aventador",
  object: "<value>",
  output: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  parallelToolCalls: true,
  presencePenalty: 5582.27,
  previousResponseId: null,
  promptCacheKey: "<value>",
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "auto",
  status: "failed",
  store: true,
  temperature: 3997.15,
  text: "<value>",
  toolChoice: "<value>",
  tools: [],
  topLogprobs: 670908,
  topP: 2219.16,
  truncation: "auto",
  usage: {
    inputTokens: 349676,
    inputTokensDetails: {
      cacheCreationTokens: 786005,
      cachedTokens: 763695,
    },
    outputTokens: 732588,
    outputTokensDetails: {
      reasoningTokens: 376439,
    },
    totalTokens: 349904,
  },
  user: "Rose.Rath97",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `background`                                                                                   | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `completedAt`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `conversation`                                                                                 | [components.ConversationParam](../../models/components/conversationparam.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `error`                                                                                        | [components.ResponseError](../../models/components/responseerror.md)                           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `frequencyPenalty`                                                                             | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `incompleteDetails`                                                                            | [components.IncompleteDetails](../../models/components/incompletedetails.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `input`                                                                                        | *any*[]                                                                                        | :heavy_check_mark:                                                                             | Array of input items (messages, function call outputs, etc.)                                   |
| `instructions`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `maxOutputTokens`                                                                              | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `maxToolCalls`                                                                                 | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `memory`                                                                                       | [components.MemoryParam](../../models/components/memoryparam.md)                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_check_mark:                                                                             | Developer-defined key-value pairs attached to the response (OpenAI spec: Map<string, string>). |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `object`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Always "response"                                                                              |
| `output`                                                                                       | *any*[]                                                                                        | :heavy_check_mark:                                                                             | Array of output items (messages, function calls, reasoning, etc.)                              |
| `parallelToolCalls`                                                                            | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `presencePenalty`                                                                              | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `previousResponseId`                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `promptCacheKey`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `promptCacheRetention`                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `reasoning`                                                                                    | [components.Reasoning](../../models/components/reasoning.md)                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `safetyIdentifier`                                                                             | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `serviceTier`                                                                                  | [operations.ServiceTier](../../models/operations/servicetier.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.CreateRouterResponseStatus](../../models/operations/createrouterresponsestatus.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `store`                                                                                        | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `temperature`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `text`                                                                                         | *any*                                                                                          | :heavy_check_mark:                                                                             | Text output configuration including format and verbosity                                       |
| `toolChoice`                                                                                   | *any*                                                                                          | :heavy_check_mark:                                                                             | Tool choice setting: "auto", "none", "required", or a specific function                        |
| `tools`                                                                                        | *any*[]                                                                                        | :heavy_check_mark:                                                                             | Array of tool configurations used in this response                                             |
| `topLogprobs`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `topP`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `truncation`                                                                                   | [operations.Truncation](../../models/operations/truncation.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `usage`                                                                                        | [components.PublicUsage](../../models/components/publicusage.md)                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `user`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `variables`                                                                                    | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |