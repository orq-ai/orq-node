# UpdateDatapointAnnotationsDatasets2

## Example Usage

```typescript
import { UpdateDatapointAnnotationsDatasets2 } from "@orq-ai/node/models/operations";

let value: UpdateDatapointAnnotationsDatasets2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 678458,
  endIndex: 770403,
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | [operations.UpdateDatapointAnnotationsDatasetsResponse200Type](../../models/operations/updatedatapointannotationsdatasetsresponse200type.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `text`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `filePath`                                                                                                                                   | [operations.UpdateDatapointAnnotationsDatasetsFilePath](../../models/operations/updatedatapointannotationsdatasetsfilepath.md)               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `startIndex`                                                                                                                                 | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `endIndex`                                                                                                                                   | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |