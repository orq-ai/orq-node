# ListBudgetsResponse

## Example Usage

```typescript
import { ListBudgetsResponse } from "@orq-ai/node/models/components";

let value: ListBudgetsResponse = {
  object: "<value>",
  data: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `object`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Object discriminator for list responses; always `list`.                          |
| `data`                                                                           | [components.BudgetRestResponse](../../models/components/budgetrestresponse.md)[] | :heavy_check_mark:                                                               | Page of budgets, ordered newest first.                                           |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether more budgets are available in the selected pagination<br/> direction.    |