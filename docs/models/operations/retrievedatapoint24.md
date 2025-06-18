# RetrieveDatapoint24

## Example Usage

```typescript
import { RetrieveDatapoint24 } from "@orq-ai/node/models/operations";

let value: RetrieveDatapoint24 = {
  type: "file",
  file: {
    fileData: "<value>",
    filename: "example.file",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.RetrieveDatapoint2DatasetsResponse200Type](../../models/operations/retrievedatapoint2datasetsresponse200type.md) | :heavy_check_mark:                                                                                                           | The type of the content part. Always `file`.                                                                                 |
| `file`                                                                                                                       | [operations.RetrieveDatapoint2File](../../models/operations/retrievedatapoint2file.md)                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |