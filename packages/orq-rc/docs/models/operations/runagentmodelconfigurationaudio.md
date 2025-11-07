# RunAgentModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { RunAgentModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: RunAgentModelConfigurationAudio = {
  voice: "nova",
  format: "opus",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                    | [operations.RunAgentModelConfigurationVoice](../../models/operations/runagentmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                         | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.     |
| `format`                                                                                                   | [operations.RunAgentModelConfigurationFormat](../../models/operations/runagentmodelconfigurationformat.md) | :heavy_check_mark:                                                                                         | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                          |