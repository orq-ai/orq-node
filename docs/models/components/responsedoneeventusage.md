# ResponseDoneEventUsage

Token usage statistics for the complete response

## Example Usage

```typescript
import { ResponseDoneEventUsage } from "@orq-ai/node/models/components";

let value: ResponseDoneEventUsage = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `completionTokens`                                                                                                         | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of tokens in the generated completion.                                                                              |
| `promptTokens`                                                                                                             | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of tokens in the prompt.                                                                                            |
| `totalTokens`                                                                                                              | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Total number of tokens used in the request (prompt + completion).                                                          |
| `promptTokensDetails`                                                                                                      | [components.ResponseDoneEventPromptTokensDetails](../../models/components/responsedoneeventprompttokensdetails.md)         | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `completionTokensDetails`                                                                                                  | [components.ResponseDoneEventCompletionTokensDetails](../../models/components/responsedoneeventcompletiontokensdetails.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |