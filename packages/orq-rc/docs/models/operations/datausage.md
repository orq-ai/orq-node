# DataUsage

## Example Usage

```typescript
import { DataUsage } from "@orq-ai/node/models/operations";

let value: DataUsage = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `totalTokens`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `promptTokens`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `completionTokens`                                                                       | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `promptTokensDetails`                                                                    | [operations.PromptTokensDetails](../../models/operations/prompttokensdetails.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `completionTokensDetails`                                                                | [operations.CompletionTokensDetails](../../models/operations/completiontokensdetails.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |