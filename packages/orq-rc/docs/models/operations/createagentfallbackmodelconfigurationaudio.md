# CreateAgentFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { CreateAgentFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: CreateAgentFallbackModelConfigurationAudio = {
  voice: "shimmer",
  format: "opus",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                          | [operations.CreateAgentFallbackModelConfigurationVoice](../../models/operations/createagentfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                               | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                           |
| `format`                                                                                                                         | [operations.CreateAgentFallbackModelConfigurationFormat](../../models/operations/createagentfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                               | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                |