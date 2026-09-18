# BudgetLimit

## Example Usage

```typescript
import { BudgetLimit } from "@orq-ai/node/models/components";

let value: BudgetLimit = {
  amount: 7256.43,
  currency: "usd",
  period: "day",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `amount`                                                   | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `currency`                                                 | [components.Currency](../../models/components/currency.md) | :heavy_check_mark:                                         | N/A                                                        |
| `period`                                                   | [components.Period](../../models/components/period.md)     | :heavy_check_mark:                                         | N/A                                                        |