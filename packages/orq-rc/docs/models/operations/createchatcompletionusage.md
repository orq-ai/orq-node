# CreateChatCompletionUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { CreateChatCompletionUsage } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionUsage = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completionTokens`                                                                       | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of tokens in the generated completion.                                            |
| `promptTokens`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of tokens in the prompt.                                                          |
| `totalTokens`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | Total number of tokens used in the request (prompt + completion).                        |
| `promptTokensDetails`                                                                    | [operations.PromptTokensDetails](../../models/operations/prompttokensdetails.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `completionTokensDetails`                                                                | [operations.CompletionTokensDetails](../../models/operations/completiontokensdetails.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |