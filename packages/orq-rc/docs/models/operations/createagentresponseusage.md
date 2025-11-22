# CreateAgentResponseUsage

Token usage from the agent execution

## Example Usage

```typescript
import { CreateAgentResponseUsage } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseUsage = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `completionTokens`                                                                       | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of tokens in the generated completion.                                            |
| `promptTokens`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of tokens in the prompt.                                                          |
| `totalTokens`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | Total number of tokens used in the request (prompt + completion).                        |
| `promptTokensDetails`                                                                    | [operations.PromptTokensDetails](../../models/operations/prompttokensdetails.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `completionTokensDetails`                                                                | [operations.CompletionTokensDetails](../../models/operations/completiontokensdetails.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |