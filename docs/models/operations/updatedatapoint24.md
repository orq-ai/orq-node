# UpdateDatapoint24

## Example Usage

```typescript
import { UpdateDatapoint24 } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.UpdateDatapoint2DatasetsRequestRequestBodyType](../../models/operations/updatedatapoint2datasetsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                     | The type of the content part. Always `file`.                                                                                           |
| `file`                                                                                                                                 | [operations.UpdateDatapoint2File](../../models/operations/updatedatapoint2file.md)                                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |