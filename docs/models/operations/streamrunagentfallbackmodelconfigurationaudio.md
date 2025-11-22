# StreamRunAgentFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { StreamRunAgentFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFallbackModelConfigurationAudio = {
  voice: "alloy",
  format: "opus",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                                | [operations.StreamRunAgentFallbackModelConfigurationVoice](../../models/operations/streamrunagentfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                                 |
| `format`                                                                                                                               | [operations.StreamRunAgentFallbackModelConfigurationFormat](../../models/operations/streamrunagentfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                      |