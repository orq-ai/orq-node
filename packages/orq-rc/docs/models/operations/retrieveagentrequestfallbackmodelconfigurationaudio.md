# RetrieveAgentRequestFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { RetrieveAgentRequestFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestFallbackModelConfigurationAudio = {
  voice: "shimmer",
  format: "mp3",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                                            | [operations.RetrieveAgentRequestFallbackModelConfigurationVoice](../../models/operations/retrieveagentrequestfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                                                 | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                                             |
| `format`                                                                                                                                           | [operations.RetrieveAgentRequestFallbackModelConfigurationFormat](../../models/operations/retrieveagentrequestfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                                                 | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                                  |