# CreateAgentRequestFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { CreateAgentRequestFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestFallbackModelConfigurationAudio = {
  voice: "fable",
  format: "wav",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                                        | [operations.CreateAgentRequestFallbackModelConfigurationVoice](../../models/operations/createagentrequestfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                                             | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                                         |
| `format`                                                                                                                                       | [operations.CreateAgentRequestFallbackModelConfigurationFormat](../../models/operations/createagentrequestfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                                             | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                              |