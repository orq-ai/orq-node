# UpdateAgentFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { UpdateAgentFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelConfigurationAudio = {
  voice: "echo",
  format: "flac",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                          | [operations.UpdateAgentFallbackModelConfigurationVoice](../../models/operations/updateagentfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                               | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                           |
| `format`                                                                                                                         | [operations.UpdateAgentFallbackModelConfigurationFormat](../../models/operations/updateagentfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                               | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                |