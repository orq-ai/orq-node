# PublicUsage

## Example Usage

```typescript
import { PublicUsage } from "@orq-ai/node/models/components";

let value: PublicUsage = {
  inputTokens: 37454,
  inputTokensDetails: {
    cacheCreationTokens: 763695,
    cachedTokens: 732588,
  },
  outputTokens: 218537,
  outputTokensDetails: {
    reasoningTokens: 349904,
  },
  totalTokens: 444522,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `inputCost`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | Cost (USD) of input tokens. Present when billing was computed for this response.       |
| `inputTokens`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `inputTokensDetails`                                                                   | [components.InputTokensDetails](../../models/components/inputtokensdetails.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `outputCost`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | Cost (USD) of output tokens. Present when billing was computed for this response.      |
| `outputTokens`                                                                         | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `outputTokensDetails`                                                                  | [components.OutputTokensDetails](../../models/components/outputtokensdetails.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `totalCost`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | Total cost (USD) of the response. Present when billing was computed for this response. |
| `totalTokens`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `webSearchRequests`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |