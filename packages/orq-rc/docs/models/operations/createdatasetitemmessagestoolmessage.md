# CreateDatasetItemMessagesToolMessage

## Example Usage

```typescript
import { CreateDatasetItemMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: null,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                               | *"tool"*                                                                                                             | :heavy_check_mark:                                                                                                   | The role of the messages author, in this case tool.                                                                  |
| `content`                                                                                                            | *operations.CreateDatasetItemMessagesDatasetsRequestRequestBody5Content*                                             | :heavy_check_mark:                                                                                                   | The contents of the tool message.                                                                                    |
| `toolCallId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Tool call that this message is responding to.                                                                        |
| `cacheControl`                                                                                                       | [operations.CreateDatasetItemMessagesCacheControl](../../models/operations/createdatasetitemmessagescachecontrol.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |