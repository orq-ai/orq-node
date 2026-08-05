# ResponseBodyUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { ResponseBodyUsage } from "@orq-ai/node/models/operations";

let value: ResponseBodyUsage = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `completionTokens`                                                                                               | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of tokens in the generated completion.                                                                    |
| `promptTokens`                                                                                                   | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of tokens in the prompt.                                                                                  |
| `totalTokens`                                                                                                    | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Total number of tokens used in the request (prompt + completion).                                                |
| `promptTokensDetails`                                                                                            | [operations.ResponseBodyPromptTokensDetails](../../models/operations/responsebodyprompttokensdetails.md)         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `completionTokensDetails`                                                                                        | [operations.ResponseBodyCompletionTokensDetails](../../models/operations/responsebodycompletiontokensdetails.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |