# BulkCreateDatapoints2Datasets3

## Example Usage

```typescript
import { BulkCreateDatapoints2Datasets3 } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapoints2Datasets3 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [operations.BulkCreateDatapoints2DatasetsResponse200ApplicationJSONType](../../models/operations/bulkcreatedatapoints2datasetsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                               | The type of the content part. Always `file`.                                                                                                                     |
| `file`                                                                                                                                                           | [operations.BulkCreateDatapoints2DatasetsFile](../../models/operations/bulkcreatedatapoints2datasetsfile.md)                                                     | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |