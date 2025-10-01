# ListActionsResponseBody

List of actions

## Example Usage

```typescript
import { ListActionsResponseBody } from "@orq-ai/node/models/operations";

let value: ListActionsResponseBody = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.ListActionsObject](../../models/operations/listactionsobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.ListActionsData](../../models/operations/listactionsdata.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |