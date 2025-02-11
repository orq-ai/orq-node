# DeploymentStreamDocuments

## Example Usage

```typescript
import { DeploymentStreamDocuments } from "@orq-ai/node/models/operations";

let value: DeploymentStreamDocuments = {
  text: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `text`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The text content of the document                                                           |
| `metadata`                                                                                 | [operations.DeploymentStreamMetadata](../../models/operations/deploymentstreammetadata.md) | :heavy_minus_sign:                                                                         | Metadata about the document                                                                |