# CreateBudgetBudget

Budget configuration

## Example Usage

```typescript
import { CreateBudgetBudget } from "@orq-ai/node/models/operations";

let value: CreateBudgetBudget = {
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `period`                                                                       | [operations.CreateBudgetPeriod](../../models/operations/createbudgetperiod.md) | :heavy_check_mark:                                                             | Budget period type                                                             | monthly                                                                        |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | Budget amount in USD for the specified period                                  | 250                                                                            |