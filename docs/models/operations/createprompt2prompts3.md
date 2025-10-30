# CreatePrompt2Prompts3

## Example Usage

```typescript
import { CreatePrompt2Prompts3 } from "@orq-ai/node/models/operations";

let value: CreatePrompt2Prompts3 = {
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
| `type`                                                                                                                                                     | [operations.CreatePrompt2PromptsRequestRequestBodyPromptMessagesType](../../models/operations/createprompt2promptsrequestrequestbodypromptmessagestype.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `inputAudio`                                                                                                                                               | [operations.CreatePrompt2InputAudio](../../models/operations/createprompt2inputaudio.md)                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |