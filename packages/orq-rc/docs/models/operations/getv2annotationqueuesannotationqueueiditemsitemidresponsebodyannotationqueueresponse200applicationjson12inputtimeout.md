# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12InputTimeout

Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12InputTimeout,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12InputTimeout =
    {
      callTimeout: 30000,
    };
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `callTimeout`                 | *number*                      | :heavy_check_mark:            | Timeout value in milliseconds | 30000                         |