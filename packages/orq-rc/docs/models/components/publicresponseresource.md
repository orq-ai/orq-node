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
  frequencyPenalty: 2767.55,
  id: "<id>",
  incompleteDetails: {
    reason: "<value>",
  },
  input: [],
  instructions: "<value>",
  maxOutputTokens: 230062,
  maxToolCalls: 743254,
  metadata: {},
  model: "Jetta",
  object: "<value>",
  output: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  parallelToolCalls: true,
  presencePenalty: 9268.37,
  previousResponseId: "<id>",
  promptCacheKey: "<value>",
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "default",
  status: "failed",
  store: true,
  temperature: 7918.84,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
  ],
  topLogprobs: 16413,
  topP: 138.17,
  truncation: "disabled",
  usage: {
    inputTokens: 555125,
    inputTokensDetails: {
      cacheCreationTokens: 520588,
      cachedTokens: 732049,
    },
    outputTokens: 15634,
    outputTokensDetails: {
      reasoningTokens: 572043,
    },
    totalTokens: 110886,
  },
  user: "Gavin29",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `background`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `completedAt`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `conversation`                                                                                     | [components.ConversationParam](../../models/components/conversationparam.md)                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `error`                                                                                            | [components.ResponseError](../../models/components/responseerror.md)                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `frequencyPenalty`                                                                                 | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `incompleteDetails`                                                                                | [components.IncompleteDetails](../../models/components/incompletedetails.md)                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `input`                                                                                            | *any*[]                                                                                            | :heavy_check_mark:                                                                                 | Array of input items (messages, function call outputs, etc.)                                       |
| `instructions`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `maxOutputTokens`                                                                                  | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `maxToolCalls`                                                                                     | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `memory`                                                                                           | [components.MemoryParam](../../models/components/memoryparam.md)                                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | Developer-defined key-value pairs attached to the response (OpenAI spec: Map<string, string>).     |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `object`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | Always "response"                                                                                  |
| `output`                                                                                           | *any*[]                                                                                            | :heavy_check_mark:                                                                                 | Array of output items (messages, function calls, reasoning, etc.)                                  |
| `parallelToolCalls`                                                                                | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `presencePenalty`                                                                                  | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `previousResponseId`                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `promptCacheKey`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `promptCacheRetention`                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `reasoning`                                                                                        | [components.Reasoning](../../models/components/reasoning.md)                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `safetyIdentifier`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `serviceTier`                                                                                      | [components.ServiceTier](../../models/components/servicetier.md)                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [components.PublicResponseResourceStatus](../../models/components/publicresponseresourcestatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `store`                                                                                            | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `temperature`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `text`                                                                                             | *any*                                                                                              | :heavy_check_mark:                                                                                 | Text output configuration including format and verbosity                                           |
| `toolChoice`                                                                                       | *any*                                                                                              | :heavy_check_mark:                                                                                 | Tool choice setting: "auto", "none", "required", or a specific function                            |
| `tools`                                                                                            | *any*[]                                                                                            | :heavy_check_mark:                                                                                 | Array of tool configurations used in this response                                                 |
| `topLogprobs`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `topP`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `truncation`                                                                                       | [components.Truncation](../../models/components/truncation.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `usage`                                                                                            | [components.PublicUsage](../../models/components/publicusage.md)                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `user`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `variables`                                                                                        | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |