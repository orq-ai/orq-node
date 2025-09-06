# UpdateBudgetRequestBody

## Example Usage

```typescript
import { UpdateBudgetRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateBudgetRequestBody = {
  budget: {
    period: "monthly",
    amount: 300,
  },
  isActive: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `budget`                                               | [operations.Budget](../../models/operations/budget.md) | :heavy_minus_sign:                                     | Budget configuration to update                         |                                                        |
| `isActive`                                             | *boolean*                                              | :heavy_minus_sign:                                     | Whether this budget configuration is currently active  | true                                                   |