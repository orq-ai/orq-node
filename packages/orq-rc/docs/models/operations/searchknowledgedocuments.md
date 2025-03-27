# SearchKnowledgeDocuments

## Example Usage

```typescript
import { SearchKnowledgeDocuments } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeDocuments = {
  id: "<id>",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "video",
  },
  score: 3175.04,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier for the retrieval                                                      |
| `text`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | Text content of the document                                                             |
| `metadata`                                                                               | [operations.SearchKnowledgeMetadata](../../models/operations/searchknowledgemetadata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `score`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | The score of the document                                                                |
| `rerankScore`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | The rerank score of the document                                                         |