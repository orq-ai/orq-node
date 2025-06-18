# CreateDatasetItemMessagesToolMessage

## Example Usage

```typescript
import { CreateDatasetItemMessagesToolMessage } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesToolMessage = {
  role: "tool",
  content: [
    "<value 1>",
  ],
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                     | [operations.CreateDatasetItemMessagesDatasetsRequestRequestBody5Role](../../models/operations/createdatasetitemmessagesdatasetsrequestrequestbody5role.md) | :heavy_check_mark:                                                                                                                                         | The role of the messages author, in this case tool.                                                                                                        |
| `content`                                                                                                                                                  | *operations.CreateDatasetItemMessagesDatasetsRequestContent*                                                                                               | :heavy_check_mark:                                                                                                                                         | The contents of the tool message.                                                                                                                          |
| `toolCallId`                                                                                                                                               | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | Tool call that this message is responding to.                                                                                                              |