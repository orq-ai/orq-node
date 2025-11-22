# StreamRunAgentDataUsage

Token usage from the last agent message

## Example Usage

```typescript
import { StreamRunAgentDataUsage } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataUsage = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `completionTokens`                                                                                                           | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Number of tokens in the generated completion.                                                                                |
| `promptTokens`                                                                                                               | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Number of tokens in the prompt.                                                                                              |
| `totalTokens`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Total number of tokens used in the request (prompt + completion).                                                            |
| `promptTokensDetails`                                                                                                        | [operations.StreamRunAgentDataPromptTokensDetails](../../models/operations/streamrunagentdataprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `completionTokensDetails`                                                                                                    | [operations.StreamRunAgentDataCompletionTokensDetails](../../models/operations/streamrunagentdatacompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |