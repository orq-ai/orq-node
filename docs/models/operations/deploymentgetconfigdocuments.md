# DeploymentGetConfigDocuments

## Example Usage

```typescript
import { DeploymentGetConfigDocuments } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigDocuments = {
  text: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `text`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The text content of the document                                                                 |
| `metadata`                                                                                       | [operations.DeploymentGetConfigMetadata](../../models/operations/deploymentgetconfigmetadata.md) | :heavy_minus_sign:                                                                               | Metadata about the document                                                                      |