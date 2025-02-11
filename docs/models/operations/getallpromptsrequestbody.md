# GetAllPromptsRequestBody

## Example Usage

```typescript
import { GetAllPromptsRequestBody } from "@orq-ai/node/models/operations";

let value: GetAllPromptsRequestBody = {
  filters: [
    {
      type: "string_array",
      operator: "in",
      values: [
        "<value>",
      ],
      path: "/usr/bin",
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
| `filters`                                                            | *operations.GetAllPromptsPromptsFilters*[]                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `includedFields`                                                     | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |