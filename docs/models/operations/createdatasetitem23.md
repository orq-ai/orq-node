# CreateDatasetItem23

## Example Usage

```typescript
import { CreateDatasetItem23 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.CreateDatasetItem2DatasetsRequestType](../../models/operations/createdatasetitem2datasetsrequesttype.md) | :heavy_check_mark:                                                                                                   | The type of the content part. Always `file`.                                                                         |
| `file`                                                                                                               | [operations.CreateDatasetItem2File](../../models/operations/createdatasetitem2file.md)                               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |