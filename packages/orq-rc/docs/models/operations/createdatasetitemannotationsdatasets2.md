# CreateDatasetItemAnnotationsDatasets2

## Example Usage

```typescript
import { CreateDatasetItemAnnotationsDatasets2 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemAnnotationsDatasets2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 644115,
  endIndex: 528093,
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [operations.CreateDatasetItemAnnotationsDatasetsResponse200Type](../../models/operations/createdatasetitemannotationsdatasetsresponse200type.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `text`                                                                                                                                           | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `filePath`                                                                                                                                       | [operations.CreateDatasetItemAnnotationsDatasetsFilePath](../../models/operations/createdatasetitemannotationsdatasetsfilepath.md)               | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `startIndex`                                                                                                                                     | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `endIndex`                                                                                                                                       | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |