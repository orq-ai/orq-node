# RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200Or

Or

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200Or } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200Or = {
  or: [
    {},
    {
      "key": {
        in: [
          4095.27,
        ],
      },
    },
    {
      "key": {
        ne: false,
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `or`                                                                 | Record<string, *operations.RetrieveAnnotationQueueItemFilterByOr*>[] | :heavy_check_mark:                                                   | N/A                                                                  |