# ListBudgetsResponse

## Example Usage

```typescript
import { ListBudgetsResponse } from "@orq-ai/node/models/components";

let value: ListBudgetsResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `object`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Object discriminator for list responses; always `list`.                   |
| `data`                                                                    | [components.Budget](../../models/components/budget.md)[]                  | :heavy_minus_sign:                                                        | Page of budgets, ordered newest first.                                    |
| `hasMore`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Whether more budgets are available in the selected pagination<br/> direction. |