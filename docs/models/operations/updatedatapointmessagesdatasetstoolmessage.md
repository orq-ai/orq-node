# UpdateDatapointMessagesDatasetsToolMessage

## Example Usage

```typescript
import { UpdateDatapointMessagesDatasetsToolMessage } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesDatasetsToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                           | *"tool"*                                                                                                                         | :heavy_check_mark:                                                                                                               | The role of the messages author, in this case tool.                                                                              |
| `content`                                                                                                                        | *operations.UpdateDatapointMessagesDatasetsResponse200ApplicationJSONResponseBody5Content*                                       | :heavy_check_mark:                                                                                                               | The contents of the tool message.                                                                                                |
| `toolCallId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Tool call that this message is responding to.                                                                                    |
| `cacheControl`                                                                                                                   | [operations.UpdateDatapointMessagesDatasetsCacheControl](../../models/operations/updatedatapointmessagesdatasetscachecontrol.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |