# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson34Context

Context information for the trace

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson34Context,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson34Context =
    {
      traceId: "<id>",
      spanId: "<id>",
    };
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `traceId`                                       | *string*                                        | :heavy_check_mark:                              | Unique identifier for the trace                 |
| `spanId`                                        | *string*                                        | :heavy_check_mark:                              | Unique identifier for the span within the trace |