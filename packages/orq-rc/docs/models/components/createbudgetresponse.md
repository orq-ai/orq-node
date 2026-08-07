# CreateBudgetResponse

## Example Usage

```typescript
import { CreateBudgetResponse } from "@orq-ai/node/models/components";

let value: CreateBudgetResponse = {
  budget: {
    budgetId: "<id>",
    limits: {},
    createdAt: new Date("2026-08-26T12:01:35.343Z"),
    updatedAt: new Date("2025-02-23T04:23:01.258Z"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `budget`                                                                       | [components.BudgetRestResponse](../../models/components/budgetrestresponse.md) | :heavy_check_mark:                                                             | Newly created budget.                                                          |