# GetBudgetBudget

Budget configuration

## Example Usage

```typescript
import { GetBudgetBudget } from "@orq-ai/node/models/operations";

let value: GetBudgetBudget = {
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `period`                                                                 | [operations.GetBudgetPeriod](../../models/operations/getbudgetperiod.md) | :heavy_check_mark:                                                       | Budget period type                                                       | monthly                                                                  |
| `amount`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | Budget amount in USD for the specified period                            | 250                                                                      |