# RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyOr

Or

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyOr,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyOr =
    {
      or: [
        {
          "key": {
            gt: 1770.81,
          },
        },
        {},
      ],
    };
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `or`                                                                                 | Record<string, *operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesOr*>[] | :heavy_check_mark:                                                                   | N/A                                                                                  |