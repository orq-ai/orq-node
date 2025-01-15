# UpdatePromptResponseBodyPromptsMessages

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsMessages } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsMessages = {
  role: "prompt",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://improbable-cornet.info/",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsRole](../../models/operations/updatepromptresponsebodypromptsrole.md)                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.UpdatePromptResponseBodyPromptsContent*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.UpdatePromptResponseBodyPromptsToolCalls](../../models/operations/updatepromptresponsebodypromptstoolcalls.md)[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |