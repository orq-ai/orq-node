# BudgetUpdateRequest

## Example Usage

```typescript
import { BudgetUpdateRequest } from "@orq-ai/node/models/operations";

let value: BudgetUpdateRequest = {
  budgetId: "<id>",
  updateBudgetRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `budgetId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Budget id to update.                                                             |
| `updateBudgetRequest`                                                            | [components.UpdateBudgetRequest](../../models/components/updatebudgetrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |