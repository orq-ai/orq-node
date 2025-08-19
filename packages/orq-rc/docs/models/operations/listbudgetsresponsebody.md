# ListBudgetsResponseBody

List of budget configurations

## Example Usage

```typescript
import { ListBudgetsResponseBody } from "@orq-ai/node/models/operations";

let value: ListBudgetsResponseBody = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.ListBudgetsObject](../../models/operations/listbudgetsobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.ListBudgetsData](../../models/operations/listbudgetsdata.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |