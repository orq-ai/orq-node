# RetrieveDatapoint23

## Example Usage

```typescript
import { RetrieveDatapoint23 } from "@orq-ai/node/models/operations";

let value: RetrieveDatapoint23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.RetrieveDatapoint2DatasetsResponseType](../../models/operations/retrievedatapoint2datasetsresponsetype.md) | :heavy_check_mark:                                                                                                     | The type of the content part. Always `file`.                                                                           |
| `file`                                                                                                                 | [operations.RetrieveDatapoint2File](../../models/operations/retrievedatapoint2file.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |