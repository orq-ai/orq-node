# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdFilterByAnnotationQueueResponse200And

And

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdFilterByAnnotationQueueResponse200And,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdFilterByAnnotationQueueResponse200And =
    {
      and: [
        {
          "key": {
            ne: true,
          },
        },
        {},
      ],
    };
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `and`                                                                                       | Record<string, *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdFilterByAnd*>[] | :heavy_check_mark:                                                                          | N/A                                                                                         |