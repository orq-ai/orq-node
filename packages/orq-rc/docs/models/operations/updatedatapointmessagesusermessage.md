# UpdateDatapointMessagesUserMessage

## Example Usage

```typescript
import { UpdateDatapointMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: UpdateDatapointMessagesUserMessage = {
  role: "user",
  content: [],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | [operations.UpdateDatapointMessagesDatasetsRequestRole](../../models/operations/updatedatapointmessagesdatasetsrequestrole.md) | :heavy_check_mark:                                                                                                             | The role of the messages author, in this case `user`.                                                                          |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | An optional name for the participant. Provides the model information to differentiate between participants of the same role.   |
| `content`                                                                                                                      | *operations.UpdateDatapointMessagesContent*                                                                                    | :heavy_check_mark:                                                                                                             | The contents of the user message.                                                                                              |