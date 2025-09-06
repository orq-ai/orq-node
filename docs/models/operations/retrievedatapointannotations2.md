# RetrieveDatapointAnnotations2

## Example Usage

```typescript
import { RetrieveDatapointAnnotations2 } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 43898,
  endIndex: 774251,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.RetrieveDatapointAnnotationsDatasetsType](../../models/operations/retrievedatapointannotationsdatasetstype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `text`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `filePath`                                                                                                                 | [operations.RetrieveDatapointAnnotationsFilePath](../../models/operations/retrievedatapointannotationsfilepath.md)         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `startIndex`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endIndex`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |