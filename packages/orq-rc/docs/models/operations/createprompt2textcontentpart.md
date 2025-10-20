# CreatePrompt2TextContentPart

## Example Usage

```typescript
import { CreatePrompt2TextContentPart } from "@orq-ai/node/models/operations";

let value: CreatePrompt2TextContentPart = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [operations.CreatePrompt2PromptsRequestRequestBodyPromptMessages3Type](../../models/operations/createprompt2promptsrequestrequestbodypromptmessages3type.md) | :heavy_check_mark:                                                                                                                                           | The type of the content part.                                                                                                                                |
| `text`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The text content.                                                                                                                                            |
| `annotations`                                                                                                                                                | *operations.CreatePrompt2Annotations*[]                                                                                                                      | :heavy_minus_sign:                                                                                                                                           | Annotations for the text content.                                                                                                                            |