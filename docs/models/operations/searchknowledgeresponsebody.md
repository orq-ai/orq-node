# SearchKnowledgeResponseBody

Knowledge successfully retrieved

## Example Usage

```typescript
import { SearchKnowledgeResponseBody } from "@orq-ai/node/models/operations";

let value: SearchKnowledgeResponseBody = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "<id>",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "video",
      },
      score: 2704.77,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique id of the knowledge base                                                              |
| `documents`                                                                                  | [operations.SearchKnowledgeDocuments](../../models/operations/searchknowledgedocuments.md)[] | :heavy_check_mark:                                                                           | The documents returned                                                                       |
| `knowledgeKey`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The key of the knowledge base                                                                |
| `query`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The query used to search the knowledge base                                                  |