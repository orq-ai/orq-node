# CreateDatasetItem24

## Example Usage

```typescript
import { CreateDatasetItem24 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreateDatasetItem2DatasetsRequestRequestBodyType](../../models/operations/createdatasetitem2datasetsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                         | The type of the content part. Always `file`.                                                                                               |
| `file`                                                                                                                                     | [operations.CreateDatasetItem2File](../../models/operations/createdatasetitem2file.md)                                                     | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |