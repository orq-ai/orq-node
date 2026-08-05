# ResponseBodyData

## Example Usage

```typescript
import { ResponseBodyData } from "@orq-ai/node/models/operations";

let value: ResponseBodyData = {
  object: "embedding",
  embedding: [
    3661.76,
    9796.85,
  ],
  index: 563.7,
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200Object](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200object.md) | :heavy_check_mark:                                                                                                                                                                         | The object type, which is always `embedding`.                                                                                                                                              |
| `embedding`                                                                                                                                                                                | *operations.Embedding*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                         | The embedding vector, which is a list of floats. The length of vector depends on the model.                                                                                                |
| `index`                                                                                                                                                                                    | *number*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The index of the embedding in the list of embeddings.                                                                                                                                      |