# CheckBudgetsResponse

## Example Usage

```typescript
import { CheckBudgetsResponse } from "@orq-ai/node/models/components";

let value: CheckBudgetsResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `allowed`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | True when no applicable budget exceeds its limit.                                                |
| `rejection`                                                                                      | [components.BudgetRejection](../../models/components/budgetrejection.md)                         | :heavy_minus_sign:                                                                               | Populated when allowed is false; identifies which budget and<br/> dimension triggered the rejection. |
| `cost`                                                                                           | [components.DimensionInfo](../../models/components/dimensioninfo.md)                             | :heavy_minus_sign:                                                                               | Cost dimension info for rate-limit headers (nil when no cost budget applies).                    |
| `tokens`                                                                                         | [components.DimensionInfo](../../models/components/dimensioninfo.md)                             | :heavy_minus_sign:                                                                               | Token dimension info for rate-limit headers (nil when no token budget applies).                  |
| `requests`                                                                                       | [components.DimensionInfo](../../models/components/dimensioninfo.md)                             | :heavy_minus_sign:                                                                               | Requests dimension info for rate-limit headers (nil when no RPM budget applies).                 |