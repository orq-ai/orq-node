# ListAnnotationQueuesResponseBody

Annotation queues Retrieved Successfully

## Example Usage

```typescript
import { ListAnnotationQueuesResponseBody } from "@orq-ai/node/models/operations";

let value: ListAnnotationQueuesResponseBody = {
  object: "list",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [operations.ListAnnotationQueuesObject](../../models/operations/listannotationqueuesobject.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.ListAnnotationQueuesData](../../models/operations/listannotationqueuesdata.md)[]   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `hasMore`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |