# UpdateDatapoint2Datasets4

## Example Usage

```typescript
import { UpdateDatapoint2Datasets4 } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2Datasets4 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.UpdateDatapoint2DatasetsResponse200ApplicationJSONResponseBodyType](../../models/operations/updatedatapoint2datasetsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                             | The type of the content part. Always `file`.                                                                                                                                   |
| `file`                                                                                                                                                                         | [operations.UpdateDatapoint2DatasetsFile](../../models/operations/updatedatapoint2datasetsfile.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | File data for the content part. Must contain either file_data or uri, but not both.                                                                                            |