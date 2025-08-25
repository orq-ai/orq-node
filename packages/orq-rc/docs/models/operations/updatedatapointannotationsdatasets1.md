# UpdateDatapointAnnotationsDatasets1

## Example Usage

```typescript
import { UpdateDatapointAnnotationsDatasets1 } from "@orq-ai/node/models/operations";

let value: UpdateDatapointAnnotationsDatasets1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 114230,
  endIndex: 454652,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.UpdateDatapointAnnotationsDatasetsResponseType](../../models/operations/updatedatapointannotationsdatasetsresponsetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `text`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fileCitation`                                                                                                                         | [operations.UpdateDatapointAnnotationsDatasetsFileCitation](../../models/operations/updatedatapointannotationsdatasetsfilecitation.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `startIndex`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `endIndex`                                                                                                                             | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |