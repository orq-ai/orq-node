# DataUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { DataUsage } from "@orq-ai/node/models/operations";

let value: DataUsage = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `completionTokens`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Number of tokens in the generated completion.                                                    |
| `promptTokens`                                                                                   | *number*                                                                                         | :heavy_minus_sign:                                                                               | Number of tokens in the prompt.                                                                  |
| `totalTokens`                                                                                    | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of tokens used in the request (prompt + completion).                                |
| `promptTokensDetails`                                                                            | [operations.DataPromptTokensDetails](../../models/operations/dataprompttokensdetails.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `completionTokensDetails`                                                                        | [operations.DataCompletionTokensDetails](../../models/operations/datacompletiontokensdetails.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |