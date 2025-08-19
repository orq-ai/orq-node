# CreateBudgetRequestBody

## Example Usage

```typescript
import { CreateBudgetRequestBody } from "@orq-ai/node/models/operations";

let value: CreateBudgetRequestBody = {
  type: "contact",
  entityId: "user_123",
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [operations.CreateBudgetType](../../models/operations/createbudgettype.md) | :heavy_check_mark:                                                         | Budget entity type - only contact budgets supported                        | contact                                                                    |
| `entityId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Contact external ID                                                        | user_123                                                                   |
| `period`                                                                   | [operations.Period](../../models/operations/period.md)                     | :heavy_check_mark:                                                         | Budget period type                                                         | monthly                                                                    |
| `amount`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | Budget amount in USD for the specified period                              | 250                                                                        |