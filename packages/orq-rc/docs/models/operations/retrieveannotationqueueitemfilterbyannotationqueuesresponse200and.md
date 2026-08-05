# RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200And

And

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200And } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200And = {
  and: [
    {
      "key": {
        exists: false,
      },
    },
    {
      "key": {
        lte: 1961.85,
      },
    },
    {},
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `and`                                                                 | Record<string, *operations.RetrieveAnnotationQueueItemFilterByAnd*>[] | :heavy_check_mark:                                                    | N/A                                                                   |