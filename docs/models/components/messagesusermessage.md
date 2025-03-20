# MessagesUserMessage

## Example Usage

```typescript
import { MessagesUserMessage } from "@orq-ai/node/models/components";

let value: MessagesUserMessage = {
  role: "user",
  content: [
    {
      type: "input_audio",
      inputAudio: {
        data: "<value>",
        format: "wav",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [components.DeploymentsMessages3Role](../../models/components/deploymentsmessages3role.md)                                   | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case `user`.                                                                        |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *components.MessagesContent*                                                                                                 | :heavy_check_mark:                                                                                                           | The contents of the user message.                                                                                            |