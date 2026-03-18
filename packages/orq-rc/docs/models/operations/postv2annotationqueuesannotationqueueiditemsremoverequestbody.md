# PostV2AnnotationQueuesAnnotationQueueIdItemsRemoveRequestBody

## Example Usage

```typescript
import { PostV2AnnotationQueuesAnnotationQueueIdItemsRemoveRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2AnnotationQueuesAnnotationQueueIdItemsRemoveRequestBody = {
  spanIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `spanIds`                                                                   | *string*[]                                                                  | :heavy_check_mark:                                                          | The unique identifiers of the spans to be removed from the annotation queue |