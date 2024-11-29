# UpdatePromptResponseBodyPromptsResponseMessages

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsResponseMessages } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseBodyPromptsResponseMessages = {
  role: "assistant",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponseRole](../../models/operations/updatepromptresponsebodypromptsresponserole.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.UpdatePromptResponseBodyPromptsResponseContent*                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.UpdatePromptResponseBodyPromptsResponseToolCalls](../../models/operations/updatepromptresponsebodypromptsresponsetoolcalls.md)[]                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |