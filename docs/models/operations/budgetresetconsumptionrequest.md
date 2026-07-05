# BudgetResetConsumptionRequest

## Example Usage

```typescript
import { BudgetResetConsumptionRequest } from "@orq-ai/node/models/operations";

let value: BudgetResetConsumptionRequest = {
  budgetId: "<id>",
  resetBudgetConsumptionRequest: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `budgetId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Budget id whose current-period counters should be cleared.                                           |
| `resetBudgetConsumptionRequest`                                                                      | [components.ResetBudgetConsumptionRequest](../../models/components/resetbudgetconsumptionrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |