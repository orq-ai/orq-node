# CreateAgentFallbackModelsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { CreateAgentFallbackModelsAudio } from "@orq-ai/node/models/operations";

let value: CreateAgentFallbackModelsAudio = {
  voice: "fable",
  format: "opus",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                  | [operations.CreateAgentFallbackModelsVoice](../../models/operations/createagentfallbackmodelsvoice.md)   | :heavy_check_mark:                                                                                       | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.   |
| `format`                                                                                                 | [operations.CreateAgentFallbackModelsFormat](../../models/operations/createagentfallbackmodelsformat.md) | :heavy_check_mark:                                                                                       | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                        |