# UpdateAgentFallbackModelsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { UpdateAgentFallbackModelsAudio } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelsAudio = {
  voice: "nova",
  format: "flac",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                  | [operations.UpdateAgentFallbackModelsVoice](../../models/operations/updateagentfallbackmodelsvoice.md)   | :heavy_check_mark:                                                                                       | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.   |
| `format`                                                                                                 | [operations.UpdateAgentFallbackModelsFormat](../../models/operations/updateagentfallbackmodelsformat.md) | :heavy_check_mark:                                                                                       | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                        |