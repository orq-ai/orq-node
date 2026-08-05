# RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONOr

Or

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONOr } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONOr =
    {
      or: [
        {
          "key": {
            gte: 2465.01,
          },
        },
        {},
      ],
    };
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `or`                                                                                         | Record<string, *operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponseOr*>[] | :heavy_check_mark:                                                                           | N/A                                                                                          |