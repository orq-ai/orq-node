# ListBudgetsData

Budget configuration details (public API response)

## Example Usage

```typescript
import { ListBudgetsData } from "@orq-ai/node/models/operations";
import { RFCDate } from "@orq-ai/node/types";

let value: ListBudgetsData = {
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
    periodStart: new RFCDate("2024-01-01T00:00:00Z"),
    periodEnd: new RFCDate("2024-01-31T23:59:59Z"),
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique ULID for the budget configuration                                                      | 01ARZ3NDEKTSV4RRFFQ69G5FAV                                                                    |
| `type`                                                                                        | [operations.ListBudgetsType](../../models/operations/listbudgetstype.md)                      | :heavy_check_mark:                                                                            | Budget entity type                                                                            | contact                                                                                       |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Contact external identifier (present when type is "contact")                                  | user_123                                                                                      |
| `budget`                                                                                      | [operations.ListBudgetsBudget](../../models/operations/listbudgetsbudget.md)                  | :heavy_check_mark:                                                                            | Budget configuration                                                                          |                                                                                               |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this budget configuration is currently active                                         | true                                                                                          |
| `consumption`                                                                                 | [operations.ListBudgetsConsumption](../../models/operations/listbudgetsconsumption.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |                                                                                               |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |                                                                                               |