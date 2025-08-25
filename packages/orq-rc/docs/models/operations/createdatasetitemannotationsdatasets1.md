# CreateDatasetItemAnnotationsDatasets1

## Example Usage

```typescript
import { CreateDatasetItemAnnotationsDatasets1 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemAnnotationsDatasets1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 313630,
  endIndex: 675245,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreateDatasetItemAnnotationsDatasetsResponseType](../../models/operations/createdatasetitemannotationsdatasetsresponsetype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `text`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `fileCitation`                                                                                                                             | [operations.CreateDatasetItemAnnotationsDatasetsFileCitation](../../models/operations/createdatasetitemannotationsdatasetsfilecitation.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `startIndex`                                                                                                                               | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `endIndex`                                                                                                                                 | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |