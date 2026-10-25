# AutoRouterV2EffortConfig

## Example Usage

```typescript
import { AutoRouterV2EffortConfig } from "@orq-ai/node/models/components";

let value: AutoRouterV2EffortConfig = {
  intelligenceIndex: 3305.66,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `aaIndexIsEstimated`                                               | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the score at this effort is estimated.                     |
| `aaIndexVersion`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | Version of the intelligence index measured at this effort.         |
| `aaIsReasoning`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the model runs as a reasoning model at this effort.        |
| `aaReasoningEffort`                                                | *string*                                                           | :heavy_minus_sign:                                                 | Reasoning effort label Artificial Analysis reports for this entry. |
| `aaSlug`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Artificial Analysis slug of the model at this effort.              |
| `intelligenceIndex`                                                | *number*                                                           | :heavy_check_mark:                                                 | Intelligence index measured at this effort.                        |