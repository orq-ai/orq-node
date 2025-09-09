# UpdateBudgetResponseBody

Budget configuration details

## Example Usage

```typescript
import { UpdateBudgetResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateBudgetResponseBody = {
  id: "01ARZ3NDEKTSV4RRFFQ69G5FAV",
  type: "contact",
  contactId: "user_123",
  budget: {
    period: "monthly",
    amount: 250,
  },
  isActive: true,
  consumption: {
    currentAmount: 125.5,
    remainingAmount: 124.5,
    periodStart: "2024-01-01T00:00:00Z",
    periodEnd: "2024-01-31T23:59:59Z",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique ULID for the budget configuration                                                      | 01ARZ3NDEKTSV4RRFFQ69G5FAV                                                                    |
| `type`                                                                                        | [operations.UpdateBudgetType](../../models/operations/updatebudgettype.md)                    | :heavy_check_mark:                                                                            | Budget entity type                                                                            | contact                                                                                       |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Contact external identifier (present when type is "contact")                                  | user_123                                                                                      |
| `budget`                                                                                      | [operations.UpdateBudgetBudget](../../models/operations/updatebudgetbudget.md)                | :heavy_check_mark:                                                                            | Budget configuration                                                                          |                                                                                               |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this budget configuration is currently active                                         | true                                                                                          |
| `consumption`                                                                                 | [operations.UpdateBudgetConsumption](../../models/operations/updatebudgetconsumption.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |                                                                                               |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |                                                                                               |