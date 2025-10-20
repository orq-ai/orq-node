# UpdatePrompt2Prompts3

## Example Usage

```typescript
import { UpdatePrompt2Prompts3 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2Prompts3 = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "mp3",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [operations.UpdatePrompt2PromptsRequestRequestBodyPromptMessagesType](../../models/operations/updateprompt2promptsrequestrequestbodypromptmessagestype.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `inputAudio`                                                                                                                                               | [operations.UpdatePrompt2InputAudio](../../models/operations/updateprompt2inputaudio.md)                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |