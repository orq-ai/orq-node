# RetrieveDatapointMessagesToolMessage

## Example Usage

```typescript
import { RetrieveDatapointMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointMessagesToolMessage = {
  role: "tool",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                               | *"tool"*                                                                                                             | :heavy_check_mark:                                                                                                   | The role of the messages author, in this case tool.                                                                  |
| `content`                                                                                                            | *operations.RetrieveDatapointMessagesDatasetsResponse200ApplicationJSONContent*                                      | :heavy_check_mark:                                                                                                   | The contents of the tool message.                                                                                    |
| `toolCallId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Tool call that this message is responding to.                                                                        |
| `cacheControl`                                                                                                       | [operations.RetrieveDatapointMessagesCacheControl](../../models/operations/retrievedatapointmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |