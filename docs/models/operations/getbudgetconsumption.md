# GetBudgetConsumption

## Example Usage

```typescript
import { GetBudgetConsumption } from "@orq-ai/node/models/operations";
import { RFCDate } from "@orq-ai/node/types";

let value: GetBudgetConsumption = {
  currentAmount: 125.5,
  remainingAmount: 124.5,
  periodStart: new RFCDate("2024-01-01T00:00:00Z"),
  periodEnd: new RFCDate("2024-01-31T23:59:59Z"),
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `currentAmount`                            | *number*                                   | :heavy_check_mark:                         | Current period consumption in USD          | 125.5                                      |
| `remainingAmount`                          | *number*                                   | :heavy_check_mark:                         | Remaining budget (amount - current_amount) | 124.5                                      |
| `periodStart`                              | [RFCDate](../../types/rfcdate.md)          | :heavy_check_mark:                         | When the current period started            | 2024-01-01T00:00:00Z                       |
| `periodEnd`                                | [RFCDate](../../types/rfcdate.md)          | :heavy_check_mark:                         | When the current period will reset         | 2024-01-31T23:59:59Z                       |