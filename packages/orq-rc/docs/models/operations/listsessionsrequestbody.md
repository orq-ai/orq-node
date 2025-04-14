# ListSessionsRequestBody

## Example Usage

```typescript
import { ListSessionsRequestBody } from "@orq-ai/node/models/operations";

let value: ListSessionsRequestBody = {
  filters: [
    {
      type: "string_array",
      operator: "in",
      values: [
        "<value>",
      ],
      path: "/media",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `pagination`                                                         | [operations.Pagination](../../models/operations/pagination.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `sortingProps`                                                       | [operations.SortingProps](../../models/operations/sortingprops.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `query`                                                              | [operations.Query](../../models/operations/query.md)                 | :heavy_minus_sign:                                                   | N/A                                                                  |
| `filters`                                                            | *operations.ListSessionsFilters*[]                                   | :heavy_check_mark:                                                   | N/A                                                                  |
| `includedFields`                                                     | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |