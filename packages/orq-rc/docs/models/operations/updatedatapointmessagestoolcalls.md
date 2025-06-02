# UpdateDatapointMessagesToolCalls

## Example Usage

```typescript
import { UpdateDatapointMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the tool call.                                                                                 |
| `type`                                                                                                   | [operations.UpdateDatapointMessagesType](../../models/operations/updatedatapointmessagestype.md)         | :heavy_check_mark:                                                                                       | The type of the tool. Currently, only `function` is supported.                                           |
| `function`                                                                                               | [operations.UpdateDatapointMessagesFunction](../../models/operations/updatedatapointmessagesfunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |