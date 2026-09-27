# CreateDatasetItemMessagesDatasetsToolMessage

## Example Usage

```typescript
import { CreateDatasetItemMessagesDatasetsToolMessage } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesDatasetsToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: null,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                               | *"tool"*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The role of the messages author, in this case tool.                                                                                  |
| `content`                                                                                                                            | *operations.CreateDatasetItemMessagesDatasetsResponse200ApplicationJSONResponseBody5Content*                                         | :heavy_check_mark:                                                                                                                   | The contents of the tool message.                                                                                                    |
| `toolCallId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Tool call that this message is responding to.                                                                                        |
| `cacheControl`                                                                                                                       | [operations.CreateDatasetItemMessagesDatasetsCacheControl](../../models/operations/createdatasetitemmessagesdatasetscachecontrol.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |