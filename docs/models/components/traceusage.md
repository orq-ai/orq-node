# TraceUsage

## Example Usage

```typescript
import { TraceUsage } from "@orq-ai/node/models/components";

let value: TraceUsage = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `promptTokens`                       | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `completionTokens`                   | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `totalTokens`                        | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `promptCachedTokens`                 | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `promptAudioTokens`                  | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `completionReasoningTokens`          | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `completionAudioTokens`              | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `completionAcceptedPredictionTokens` | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `completionRejectedPredictionTokens` | *number*                             | :heavy_minus_sign:                   | N/A                                  |