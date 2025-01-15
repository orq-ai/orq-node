# FindOnePromptSnippetResponseBodyMessages

## Example Usage

```typescript
import { FindOnePromptSnippetResponseBodyMessages } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippetResponseBodyMessages = {
  role: "expected_output",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.FindOnePromptSnippetResponseBodyRole](../../models/operations/findonepromptsnippetresponsebodyrole.md)                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.FindOnePromptSnippetResponseBodyContent*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.FindOnePromptSnippetResponseBodyToolCalls](../../models/operations/findonepromptsnippetresponsebodytoolcalls.md)[]                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |