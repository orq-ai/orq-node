# UpdateDatapoint23

## Example Usage

```typescript
import { UpdateDatapoint23 } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.UpdateDatapoint2DatasetsRequestType](../../models/operations/updatedatapoint2datasetsrequesttype.md) | :heavy_check_mark:                                                                                               | The type of the content part. Always `file`.                                                                     |
| `file`                                                                                                           | [operations.UpdateDatapoint2File](../../models/operations/updatedatapoint2file.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |