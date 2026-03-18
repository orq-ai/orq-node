# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody1

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody1 = {
  traceId: "<id>",
  type: "span.generic",
  input: {
    "key": "<value>",
  },
  output: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Name of the trace or block                                     |
| `traceId`                                                      | *string*                                                       | :heavy_check_mark:                                             | Unique trace ID                                                |
| `duration`                                                     | *number*                                                       | :heavy_minus_sign:                                             | Total time elapsed between the trace start and end timestamp   |
| `sessionId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Unique ID to relate multiple traces together                   |
| `context`                                                      | [operations.Context](../../models/operations/context.md)       | :heavy_minus_sign:                                             | Context information for the trace                              |
| `parentId`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Parent trace ID, if applicable                                 |
| `startTime`                                                    | *string*                                                       | :heavy_minus_sign:                                             | ISO timestamp indicating when the trace started                |
| `endTime`                                                      | *string*                                                       | :heavy_minus_sign:                                             | ISO timestamp indicating when the trace ended                  |
| `events`                                                       | Record<string, *any*>[]                                        | :heavy_minus_sign:                                             | List of events associated with this trace                      |
| `attributes`                                                   | [operations.Attributes](../../models/operations/attributes.md) | :heavy_minus_sign:                                             | N/A                                                            |
| `type`                                                         | *"span.generic"*                                               | :heavy_check_mark:                                             | N/A                                                            |
| `input`                                                        | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `output`                                                       | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |