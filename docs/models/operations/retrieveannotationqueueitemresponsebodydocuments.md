# RetrieveAnnotationQueueItemResponseBodyDocuments

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyDocuments } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyDocuments = {
  id: "<id>",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "application",
  },
  score: 2673.01,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Unique identifier for the retrieval                                                                                                      |
| `text`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Text content of the document                                                                                                             |
| `metadata`                                                                                                                               | [operations.RetrieveAnnotationQueueItemResponseBodyMetadata](../../models/operations/retrieveannotationqueueitemresponsebodymetadata.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `score`                                                                                                                                  | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The score of the document                                                                                                                |
| `rerankScore`                                                                                                                            | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The rerank score of the document                                                                                                         |
| `embedding`                                                                                                                              | *number*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `chunkMetadata`                                                                                                                          | Record<string, *operations.ResponseBodyChunkMetadata*>                                                                                   | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |