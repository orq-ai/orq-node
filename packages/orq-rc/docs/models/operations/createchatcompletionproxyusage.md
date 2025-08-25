# CreateChatCompletionProxyUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { CreateChatCompletionProxyUsage } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionProxyUsage = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `completionTokens`                                                                                                               | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Number of tokens in the generated completion.                                                                                    |
| `promptTokens`                                                                                                                   | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Number of tokens in the prompt.                                                                                                  |
| `totalTokens`                                                                                                                    | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Total number of tokens used in the request (prompt + completion).                                                                |
| `promptTokensDetails`                                                                                                            | [operations.CreateChatCompletionPromptTokensDetails](../../models/operations/createchatcompletionprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `completionTokensDetails`                                                                                                        | [operations.CreateChatCompletionCompletionTokensDetails](../../models/operations/createchatcompletioncompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |