# UpdateBudgetBudget

Budget configuration

## Example Usage

```typescript
import { UpdateBudgetBudget } from "@orq-ai/node/models/operations";

let value: UpdateBudgetBudget = {
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `period`                                                                                     | [operations.UpdateBudgetBudgetsPeriod](../../models/operations/updatebudgetbudgetsperiod.md) | :heavy_check_mark:                                                                           | Budget period type                                                                           | monthly                                                                                      |
| `amount`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | Budget amount in USD for the specified period                                                | 250                                                                                          |