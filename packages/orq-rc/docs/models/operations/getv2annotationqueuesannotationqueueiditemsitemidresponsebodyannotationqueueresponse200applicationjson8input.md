# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8Input

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8Input,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8Input =
    {
      input: "<value>",
      model: "Explorer",
    };
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                       | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson8InputInput*                | :heavy_check_mark:                                                                                                                            | Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models. |
| `model`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The content moderation model you would like to use. Defaults to omni-moderation-latest                                                        |