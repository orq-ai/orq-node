# CreateResponseUsage

Usage statistics for the response

## Example Usage

```typescript
import { CreateResponseUsage } from "@orq-ai/node/models/operations";

let value: CreateResponseUsage = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `inputTokens`                                                                                              | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Number of tokens in the input                                                                              |
| `outputTokens`                                                                                             | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Number of tokens in the generated output                                                                   |
| `totalTokens`                                                                                              | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Total number of tokens used in the request (input + output)                                                |
| `inputTokensDetails`                                                                                       | [operations.CreateResponseInputTokensDetails](../../models/operations/createresponseinputtokensdetails.md) | :heavy_minus_sign:                                                                                         | Breakdown of input token usage                                                                             |
| `outputTokensDetails`                                                                                      | [operations.OutputTokensDetails](../../models/operations/outputtokensdetails.md)                           | :heavy_minus_sign:                                                                                         | Breakdown of output token usage                                                                            |