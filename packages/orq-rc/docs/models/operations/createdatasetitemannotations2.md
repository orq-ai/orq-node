# CreateDatasetItemAnnotations2

## Example Usage

```typescript
import { CreateDatasetItemAnnotations2 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 868620,
  endIndex: 418523,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.CreateDatasetItemAnnotationsDatasetsType](../../models/operations/createdatasetitemannotationsdatasetstype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `text`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `filePath`                                                                                                                 | [operations.CreateDatasetItemAnnotationsFilePath](../../models/operations/createdatasetitemannotationsfilepath.md)         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `startIndex`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endIndex`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |