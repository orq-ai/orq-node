# CreateDatasetItemMessagesUserMessage

## Example Usage

```typescript
import { CreateDatasetItemMessagesUserMessage } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemMessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://earnest-baseboard.com",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                             | [operations.CreateDatasetItemMessagesDatasetsRequestRole](../../models/operations/createdatasetitemmessagesdatasetsrequestrole.md) | :heavy_check_mark:                                                                                                                 | The role of the messages author, in this case `user`.                                                                              |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | An optional name for the participant. Provides the model information to differentiate between participants of the same role.       |
| `content`                                                                                                                          | *operations.CreateDatasetItemMessagesContent*                                                                                      | :heavy_check_mark:                                                                                                                 | The contents of the user message.                                                                                                  |