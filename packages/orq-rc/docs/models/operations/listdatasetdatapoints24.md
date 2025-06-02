# ListDatasetDatapoints24

## Example Usage

```typescript
import { ListDatasetDatapoints24 } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapoints24 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.ListDatasetDatapoints2DatasetsResponse200Type](../../models/operations/listdatasetdatapoints2datasetsresponse200type.md) | :heavy_check_mark:                                                                                                                   | The type of the content part. Always `file`.                                                                                         |
| `file`                                                                                                                               | [operations.ListDatasetDatapoints2File](../../models/operations/listdatasetdatapoints2file.md)                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |