# BulkCreateDatapoints23

## Example Usage

```typescript
import { BulkCreateDatapoints23 } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapoints23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.BulkCreateDatapoints2DatasetsRequestType](../../models/operations/bulkcreatedatapoints2datasetsrequesttype.md) | :heavy_check_mark:                                                                                                         | The type of the content part. Always `file`.                                                                               |
| `file`                                                                                                                     | [operations.BulkCreateDatapoints2File](../../models/operations/bulkcreatedatapoints2file.md)                               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |