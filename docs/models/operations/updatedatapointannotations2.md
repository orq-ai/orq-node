# UpdateDatapointAnnotations2

## Example Usage

```typescript
import { UpdateDatapointAnnotations2 } from "@orq-ai/node/models/operations";

let value: UpdateDatapointAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 5245,
  endIndex: 646789,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.UpdateDatapointAnnotationsDatasetsType](../../models/operations/updatedatapointannotationsdatasetstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `text`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `filePath`                                                                                                             | [operations.UpdateDatapointAnnotationsFilePath](../../models/operations/updatedatapointannotationsfilepath.md)         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startIndex`                                                                                                           | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `endIndex`                                                                                                             | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |