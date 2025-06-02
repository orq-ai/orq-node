# UpdateDatapointMessagesDatasetsToolCalls

## Example Usage

```typescript
import { UpdateDatapointMessagesDatasetsToolCalls } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesDatasetsToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the tool call.                                                                                                 |
| `type`                                                                                                                   | [operations.UpdateDatapointMessagesDatasetsType](../../models/operations/updatedatapointmessagesdatasetstype.md)         | :heavy_check_mark:                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                           |
| `function`                                                                                                               | [operations.UpdateDatapointMessagesDatasetsFunction](../../models/operations/updatedatapointmessagesdatasetsfunction.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |