# CreatePromptPromptsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { CreatePromptPromptsAudio } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsAudio = {
  voice: "echo",
  format: "pcm16",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                            | [operations.CreatePromptPromptsVoice](../../models/operations/createpromptpromptsvoice.md)                         | :heavy_check_mark:                                                                                                 | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.             |
| `format`                                                                                                           | [operations.CreatePromptPromptsResponse200Format](../../models/operations/createpromptpromptsresponse200format.md) | :heavy_check_mark:                                                                                                 | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                  |