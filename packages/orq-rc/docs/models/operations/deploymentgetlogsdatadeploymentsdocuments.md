# DeploymentGetLogsDataDeploymentsDocuments

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsDocuments } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsDocuments = {
  id: "<id>",
  text: "<value>",
  metadata: {
    datasourceId: "<id>",
    chunkId: "<id>",
    fileName: "example.file",
    fileType: "video",
  },
  score: 1355.97,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Unique identifier for the retrieval                                                                                                        |
| `text`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Text content of the document                                                                                                               |
| `metadata`                                                                                                                                 | [operations.DeploymentGetLogsDataDeploymentsResponseMetadata](../../models/operations/deploymentgetlogsdatadeploymentsresponsemetadata.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `score`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The score of the document                                                                                                                  |
| `rerankScore`                                                                                                                              | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The rerank score of the document                                                                                                           |