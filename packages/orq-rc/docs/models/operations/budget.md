# Budget

Budget configuration to update

## Example Usage

```typescript
import { Budget } from "@orq-ai/node/models/operations";

let value: Budget = {
  period: "monthly",
  amount: 300,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `period`                                                                       | [operations.UpdateBudgetPeriod](../../models/operations/updatebudgetperiod.md) | :heavy_minus_sign:                                                             | Budget period type                                                             | monthly                                                                        |
| `amount`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | Budget amount in USD for the specified period                                  | 300                                                                            |