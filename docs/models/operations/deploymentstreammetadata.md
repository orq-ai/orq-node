# DeploymentStreamMetadata

Metadata about the document

## Example Usage

```typescript
import { DeploymentStreamMetadata } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMetadata = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `fileName`                                 | *string*                                   | :heavy_minus_sign:                         | Name of the file the text is from.         |
| `fileType`                                 | *string*                                   | :heavy_minus_sign:                         | Content type of the file the text is from. |
| `pageNumber`                               | *number*                                   | :heavy_minus_sign:                         | The page number the text is from.          |