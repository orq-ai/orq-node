# ListDatasetDatapointsMessagesUserMessage

## Example Usage

```typescript
import { ListDatasetDatapointsMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "file",
      file: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                       | [operations.ListDatasetDatapointsMessagesDatasetsResponseRole](../../models/operations/listdatasetdatapointsmessagesdatasetsresponserole.md) | :heavy_check_mark:                                                                                                                           | The role of the messages author, in this case `user`.                                                                                        |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role.                 |
| `content`                                                                                                                                    | *operations.ListDatasetDatapointsMessagesContent*                                                                                            | :heavy_check_mark:                                                                                                                           | The contents of the user message.                                                                                                            |