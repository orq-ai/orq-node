# ListDatasetDatapoints23

## Example Usage

```typescript
import { ListDatasetDatapoints23 } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapoints23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.ListDatasetDatapoints2DatasetsResponseType](../../models/operations/listdatasetdatapoints2datasetsresponsetype.md) | :heavy_check_mark:                                                                                                             | The type of the content part. Always `file`.                                                                                   |
| `file`                                                                                                                         | [operations.ListDatasetDatapoints2File](../../models/operations/listdatasetdatapoints2file.md)                                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |