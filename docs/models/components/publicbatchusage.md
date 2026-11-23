# PublicBatchUsage

## Example Usage

```typescript
import { PublicBatchUsage } from "@orq-ai/node/models/components";

let value: PublicBatchUsage = {
  inputTokens: 793328,
  inputTokensDetails: {
    cachedTokens: 770747,
  },
  outputTokens: 113499,
  outputTokensDetails: {
    reasoningTokens: 239621,
  },
  totalTokens: 880369,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `inputTokens`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Input tokens over the successful lines.                                                                        |
| `inputTokensDetails`                                                                                           | [components.PublicBatchUsageInputTokenDetails](../../models/components/publicbatchusageinputtokendetails.md)   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `outputTokens`                                                                                                 | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Output tokens over the successful lines.                                                                       |
| `outputTokensDetails`                                                                                          | [components.PublicBatchUsageOutputTokenDetails](../../models/components/publicbatchusageoutputtokendetails.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `totalTokens`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Input and output tokens combined.                                                                              |