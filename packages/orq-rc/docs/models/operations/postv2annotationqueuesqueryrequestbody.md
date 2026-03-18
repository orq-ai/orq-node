# PostV2AnnotationQueuesQueryRequestBody

## Example Usage

```typescript
import { PostV2AnnotationQueuesQueryRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2AnnotationQueuesQueryRequestBody = {
  filters: {
    operator: "and",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `filters`                                                | [operations.Filters](../../models/operations/filters.md) | :heavy_check_mark:                                       | Filter query to filter the list                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The number of annotation queues to return                |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | The page number to return                                |