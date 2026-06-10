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
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  parallelToolCalls: true,
  presencePenalty: 2988.81,
  previousResponseId: "<id>",
  promptCacheKey: "<value>",
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "priority",
  status: "incomplete",
  store: true,
  temperature: 164.13,
  text: "<value>",
  toolChoice: "<value>",
  tools: null,
  topLogprobs: 365177,
  topP: 1473.73,
  truncation: "disabled",
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
  user: "Kelsi_Ratke81",
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