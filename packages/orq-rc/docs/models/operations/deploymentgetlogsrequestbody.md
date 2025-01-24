# DeploymentGetLogsRequestBody

## Example Usage

```typescript
import { DeploymentGetLogsRequestBody } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsRequestBody = {
  filters: [
    {
      type: "search",
      value: "<value>",
      searchPaths: [
        "<value>",
      ],
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
| `filters`                                                            | *operations.DeploymentGetLogsFilters*[]                              | :heavy_check_mark:                                                   | N/A                                                                  |
| `includedFields`                                                     | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |