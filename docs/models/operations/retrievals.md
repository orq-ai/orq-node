# Retrievals

## Example Usage

```typescript
import { Retrievals } from "@orq-ai/node/models/operations";

let value: Retrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 3685.84,
    fileType: "video",
    searchScore: 8221.18,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `document`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Content of the retrieved chunk from the knowledge base                                     |
| `metadata`                                                                                 | [operations.DeploymentInvokeMetadata](../../models/operations/deploymentinvokemetadata.md) | :heavy_check_mark:                                                                         | Metadata of the retrieved chunk from the knowledge base                                    |