# DeploymentGetLogsDataDeploymentsRetrievals

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsRetrievals } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "<id>",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "application",
      },
      score: 517.17,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Unique id of the knowledge base                                                                                                |
| `documents`                                                                                                                    | [operations.DeploymentGetLogsDataDeploymentsDocuments](../../models/operations/deploymentgetlogsdatadeploymentsdocuments.md)[] | :heavy_check_mark:                                                                                                             | The documents returned                                                                                                         |
| `knowledgeKey`                                                                                                                 | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The key of the knowledge base                                                                                                  |
| `query`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The query used to search the knowledge base                                                                                    |