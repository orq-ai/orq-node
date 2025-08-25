# RetrieveDatapointAnnotations1

## Example Usage

```typescript
import { RetrieveDatapointAnnotations1 } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 430776,
  endIndex: 556643,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.RetrieveDatapointAnnotationsType](../../models/operations/retrievedatapointannotationstype.md)                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `text`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `fileCitation`                                                                                                             | [operations.RetrieveDatapointAnnotationsFileCitation](../../models/operations/retrievedatapointannotationsfilecitation.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `startIndex`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endIndex`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |