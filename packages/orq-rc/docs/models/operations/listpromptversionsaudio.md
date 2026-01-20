# ListPromptVersionsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { ListPromptVersionsAudio } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsAudio = {
  voice: "nova",
  format: "pcm16",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                  | [operations.ListPromptVersionsVoice](../../models/operations/listpromptversionsvoice.md)                 | :heavy_check_mark:                                                                                       | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.   |
| `format`                                                                                                 | [operations.ListPromptVersionsPromptsFormat](../../models/operations/listpromptversionspromptsformat.md) | :heavy_check_mark:                                                                                       | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                        |