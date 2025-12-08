# Usage

Token usage statistics for the complete response

## Example Usage

```typescript
import { Usage } from "@orq-ai/node/models/components";

let value: Usage = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completionTokens`                                                                       | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of tokens in the generated completion.                                            |
| `promptTokens`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of tokens in the prompt.                                                          |
| `totalTokens`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | Total number of tokens used in the request (prompt + completion).                        |
| `promptTokensDetails`                                                                    | [components.PromptTokensDetails](../../models/components/prompttokensdetails.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `completionTokensDetails`                                                                | [components.CompletionTokensDetails](../../models/components/completiontokensdetails.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |