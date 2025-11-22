# StreamAgentDataAgentsUsage

Token usage from the last agent message

## Example Usage

```typescript
import { StreamAgentDataAgentsUsage } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsUsage = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `completionTokens`                                                                                                                 | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Number of tokens in the generated completion.                                                                                      |
| `promptTokens`                                                                                                                     | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Number of tokens in the prompt.                                                                                                    |
| `totalTokens`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Total number of tokens used in the request (prompt + completion).                                                                  |
| `promptTokensDetails`                                                                                                              | [operations.StreamAgentDataAgentsPromptTokensDetails](../../models/operations/streamagentdataagentsprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `completionTokensDetails`                                                                                                          | [operations.StreamAgentDataAgentsCompletionTokensDetails](../../models/operations/streamagentdataagentscompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |