# ResponseBodyDocuments

## Example Usage

```typescript
import { ResponseBodyDocuments } from "@orq-ai/node/models/operations";

let value: ResponseBodyDocuments = {
  id: "<id>",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "text",
  },
  score: 692.99,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Unique identifier for the retrieval                                                |
| `text`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | Text content of the document                                                       |
| `metadata`                                                                         | [operations.ResponseBodyMetadata](../../models/operations/responsebodymetadata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `score`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The score of the document                                                          |
| `rerankScore`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | The rerank score of the document                                                   |
| `embedding`                                                                        | *number*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `chunkMetadata`                                                                    | Record<string, *operations.ChunkMetadata*>                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |