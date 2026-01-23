# CreateCompletionUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { CreateCompletionUsage } from "@orq-ai/node/models/operations";

let value: CreateCompletionUsage = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `completionTokens`                                                                                                       | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Number of tokens in the generated completion.                                                                            |
| `promptTokens`                                                                                                           | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Number of tokens in the prompt.                                                                                          |
| `totalTokens`                                                                                                            | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Total number of tokens used in the request (prompt + completion).                                                        |
| `promptTokensDetails`                                                                                                    | [operations.CreateCompletionPromptTokensDetails](../../models/operations/createcompletionprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `completionTokensDetails`                                                                                                | [operations.CreateCompletionCompletionTokensDetails](../../models/operations/createcompletioncompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |