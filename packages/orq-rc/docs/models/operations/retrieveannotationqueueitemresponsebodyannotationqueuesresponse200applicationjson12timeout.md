# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson12Timeout

Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson12Timeout,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson12Timeout =
    {
      callTimeout: 30000,
    };
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `callTimeout`                 | *number*                      | :heavy_check_mark:            | Timeout value in milliseconds | 30000                         |