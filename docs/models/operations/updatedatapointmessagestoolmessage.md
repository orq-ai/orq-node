# UpdateDatapointMessagesToolMessage

## Example Usage

```typescript
import { UpdateDatapointMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                 | [operations.UpdateDatapointMessagesDatasetsRequestRequestBody5Role](../../models/operations/updatedatapointmessagesdatasetsrequestrequestbody5role.md) | :heavy_check_mark:                                                                                                                                     | The role of the messages author, in this case tool.                                                                                                    |
| `content`                                                                                                                                              | *operations.UpdateDatapointMessagesDatasetsRequestContent*                                                                                             | :heavy_check_mark:                                                                                                                                     | The contents of the tool message.                                                                                                                      |
| `toolCallId`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Tool call that this message is responding to.                                                                                                          |