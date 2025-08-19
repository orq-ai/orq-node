# ListBudgetsBudget

Budget configuration

## Example Usage

```typescript
import { ListBudgetsBudget } from "@orq-ai/node/models/operations";

let value: ListBudgetsBudget = {
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `period`                                                                     | [operations.ListBudgetsPeriod](../../models/operations/listbudgetsperiod.md) | :heavy_check_mark:                                                           | Budget period type                                                           | monthly                                                                      |
| `amount`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | Budget amount in USD for the specified period                                | 250                                                                          |