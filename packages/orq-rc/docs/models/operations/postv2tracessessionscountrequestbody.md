# PostV2TracesSessionsCountRequestBody

## Example Usage

```typescript
import { PostV2TracesSessionsCountRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2TracesSessionsCountRequestBody = {
  filters: [
    {
      type: "string_array",
      operator: "in",
      values: [
        "<value>",
      ],
      path: "/opt/include",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                           | [operations.PostV2TracesSessionsCountPagination](../../models/operations/postv2tracessessionscountpagination.md)       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `sortingProps`                                                                                                         | [operations.PostV2TracesSessionsCountSortingProps](../../models/operations/postv2tracessessionscountsortingprops.md)[] | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `query`                                                                                                                | [operations.PostV2TracesSessionsCountQuery](../../models/operations/postv2tracessessionscountquery.md)                 | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `filters`                                                                                                              | *operations.PostV2TracesSessionsCountRequestFilters*[]                                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `includedFields`                                                                                                       | Record<string, *string*>                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |