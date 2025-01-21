# DataRetrievals

## Example Usage

```typescript
import { DataRetrievals } from "@orq-ai/node/models/operations";

let value: DataRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "<id>",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "text",
      },
      score: 1080.4,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `knowledgeId`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Unique id of the knowledge base                                        |
| `documents`                                                            | [operations.DataDocuments](../../models/operations/datadocuments.md)[] | :heavy_check_mark:                                                     | The documents returned                                                 |
| `knowledgeKey`                                                         | *string*                                                               | :heavy_check_mark:                                                     | The key of the knowledge base                                          |
| `query`                                                                | *string*                                                               | :heavy_check_mark:                                                     | The query used to search the knowledge base                            |