# DeploymentStreamRetrievals

## Example Usage

```typescript
import { DeploymentStreamRetrievals } from "@orq-ai/node/models/operations";

let value: DeploymentStreamRetrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 1605.38,
    fileType: "text",
    searchScore: 9591.67,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Content of the retrieved chunk from the knowledge base                                                           |
| `metadata`                                                                                                       | [operations.DeploymentStreamDeploymentsMetadata](../../models/operations/deploymentstreamdeploymentsmetadata.md) | :heavy_check_mark:                                                                                               | Metadata of the retrieved chunk from the knowledge base                                                          |