# RunAgentFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { RunAgentFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: RunAgentFallbackModelConfigurationAudio = {
  voice: "nova",
  format: "pcm16",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                    | [operations.RunAgentFallbackModelConfigurationVoice](../../models/operations/runagentfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                         | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                     |
| `format`                                                                                                                   | [operations.RunAgentFallbackModelConfigurationFormat](../../models/operations/runagentfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                         | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                          |