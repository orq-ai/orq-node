# ListDatasetDatapointsMessagesToolMessage

## Example Usage

```typescript
import { ListDatasetDatapointsMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | *"tool"*                                                                                                                     | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case tool.                                                                          |
| `content`                                                                                                                    | *operations.ListDatasetDatapointsMessagesDatasetsResponse200ApplicationJSONContent*                                          | :heavy_check_mark:                                                                                                           | The contents of the tool message.                                                                                            |
| `toolCallId`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Tool call that this message is responding to.                                                                                |
| `cacheControl`                                                                                                               | [operations.ListDatasetDatapointsMessagesCacheControl](../../models/operations/listdatasetdatapointsmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |