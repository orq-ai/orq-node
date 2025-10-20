# UpdatePrompt2TextContentPart

## Example Usage

```typescript
import { UpdatePrompt2TextContentPart } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [operations.UpdatePrompt2PromptsRequestRequestBodyPromptMessages3Type](../../models/operations/updateprompt2promptsrequestrequestbodypromptmessages3type.md) | :heavy_check_mark:                                                                                                                                           | The type of the content part.                                                                                                                                |
| `text`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The text content.                                                                                                                                            |
| `annotations`                                                                                                                                                | *operations.UpdatePrompt2Annotations*[]                                                                                                                      | :heavy_minus_sign:                                                                                                                                           | Annotations for the text content.                                                                                                                            |