# CreateDatasetItemMessagesDatasetsToolCalls

## Example Usage

```typescript
import { CreateDatasetItemMessagesDatasetsToolCalls } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesDatasetsToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the tool call.                                                                                                     |
| `type`                                                                                                                       | [operations.CreateDatasetItemMessagesDatasetsType](../../models/operations/createdatasetitemmessagesdatasetstype.md)         | :heavy_check_mark:                                                                                                           | The type of the tool. Currently, only `function` is supported.                                                               |
| `function`                                                                                                                   | [operations.CreateDatasetItemMessagesDatasetsFunction](../../models/operations/createdatasetitemmessagesdatasetsfunction.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |