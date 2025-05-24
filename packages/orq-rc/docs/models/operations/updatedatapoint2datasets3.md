# UpdateDatapoint2Datasets3

## Example Usage

```typescript
import { UpdateDatapoint2Datasets3 } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2Datasets3 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.UpdateDatapoint2DatasetsResponse200ApplicationJSONType](../../models/operations/updatedatapoint2datasetsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                     | The type of the content part. Always `file`.                                                                                                           |
| `file`                                                                                                                                                 | [operations.UpdateDatapoint2DatasetsFile](../../models/operations/updatedatapoint2datasetsfile.md)                                                     | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |