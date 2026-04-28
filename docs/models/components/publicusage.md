# PublicUsage

## Example Usage

```typescript
import { PublicUsage } from "@orq-ai/node/models/components";

let value: PublicUsage = {
  inputTokens: 37454,
  inputTokensDetails: {
    cacheCreationTokens: 221916,
    cachedTokens: 959224,
  },
  outputTokens: 218537,
  outputTokensDetails: {
    reasoningTokens: 786005,
  },
  totalTokens: 444522,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `inputTokens`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `inputTokensDetails`                                                             | [components.InputTokensDetails](../../models/components/inputtokensdetails.md)   | :heavy_check_mark:                                                               | N/A                                                                              |
| `outputTokens`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `outputTokensDetails`                                                            | [components.OutputTokensDetails](../../models/components/outputtokensdetails.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `totalTokens`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `webSearchRequests`                                                              | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |