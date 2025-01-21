# DeploymentInvokeRetrievals

## Example Usage

```typescript
import { DeploymentInvokeRetrievals } from "@orq-ai/node/models/operations";

let value: DeploymentInvokeRetrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 7774.08,
    fileType: "audio",
    searchScore: 3738.13,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Content of the retrieved chunk from the knowledge base                                                           |
| `metadata`                                                                                                       | [operations.DeploymentInvokeDeploymentsMetadata](../../models/operations/deploymentinvokedeploymentsmetadata.md) | :heavy_check_mark:                                                                                               | Metadata of the retrieved chunk from the knowledge base                                                          |