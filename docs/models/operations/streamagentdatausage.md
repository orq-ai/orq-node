# StreamAgentDataUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { StreamAgentDataUsage } from "@orq-ai/node/models/operations";

let value: StreamAgentDataUsage = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `completionTokens`                                                                                                     | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Number of tokens in the generated completion.                                                                          |
| `promptTokens`                                                                                                         | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Number of tokens in the prompt.                                                                                        |
| `totalTokens`                                                                                                          | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Total number of tokens used in the request (prompt + completion).                                                      |
| `promptTokensDetails`                                                                                                  | [operations.StreamAgentDataPromptTokensDetails](../../models/operations/streamagentdataprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `completionTokensDetails`                                                                                              | [operations.StreamAgentDataCompletionTokensDetails](../../models/operations/streamagentdatacompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |