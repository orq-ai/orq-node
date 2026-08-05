# RetrieveAnnotationQueueItemMessagesToolMessage

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                   | *"tool"*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The role of the messages author, in this case tool.                                                                                      |
| `content`                                                                                                                                | *operations.RetrieveAnnotationQueueItemMessagesAnnotationQueuesResponse200ApplicationJSONContent*                                        | :heavy_check_mark:                                                                                                                       | The contents of the tool message.                                                                                                        |
| `toolCallId`                                                                                                                             | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Tool call that this message is responding to.                                                                                            |
| `cacheControl`                                                                                                                           | [operations.RetrieveAnnotationQueueItemMessagesCacheControl](../../models/operations/retrieveannotationqueueitemmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |