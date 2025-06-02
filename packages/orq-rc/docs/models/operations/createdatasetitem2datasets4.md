# CreateDatasetItem2Datasets4

## Example Usage

```typescript
import { CreateDatasetItem2Datasets4 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2Datasets4 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.CreateDatasetItem2DatasetsResponse200ApplicationJSONResponseBodyType](../../models/operations/createdatasetitem2datasetsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                 | The type of the content part. Always `file`.                                                                                                                                       |
| `file`                                                                                                                                                                             | [operations.CreateDatasetItem2DatasetsFile](../../models/operations/createdatasetitem2datasetsfile.md)                                                                             | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |