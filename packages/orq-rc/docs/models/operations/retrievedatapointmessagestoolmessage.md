# RetrieveDatapointMessagesToolMessage

## Example Usage

```typescript
import { RetrieveDatapointMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: RetrieveDatapointMessagesToolMessage = {
  role: "tool",
  content: [
    "<value>",
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                   | [operations.RetrieveDatapointMessagesDatasetsResponse200ApplicationJSONRole](../../models/operations/retrievedatapointmessagesdatasetsresponse200applicationjsonrole.md) | :heavy_check_mark:                                                                                                                                                       | The role of the messages author, in this case tool.                                                                                                                      |
| `content`                                                                                                                                                                | *operations.RetrieveDatapointMessagesDatasetsResponseContent*                                                                                                            | :heavy_check_mark:                                                                                                                                                       | The contents of the tool message.                                                                                                                                        |
| `toolCallId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | Tool call that this message is responding to.                                                                                                                            |