# CreateDatasetItemAnnotations1

## Example Usage

```typescript
import { CreateDatasetItemAnnotations1 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 482785,
  endIndex: 135537,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.CreateDatasetItemAnnotationsType](../../models/operations/createdatasetitemannotationstype.md)                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `text`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `fileCitation`                                                                                                             | [operations.CreateDatasetItemAnnotationsFileCitation](../../models/operations/createdatasetitemannotationsfilecitation.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `startIndex`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endIndex`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |