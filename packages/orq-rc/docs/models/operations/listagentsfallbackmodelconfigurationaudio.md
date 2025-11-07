# ListAgentsFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { ListAgentsFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: ListAgentsFallbackModelConfigurationAudio = {
  voice: "nova",
  format: "mp3",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                                        | [operations.ListAgentsFallbackModelConfigurationVoice](../../models/operations/listagentsfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                             | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                         |
| `format`                                                                                                                       | [operations.ListAgentsFallbackModelConfigurationFormat](../../models/operations/listagentsfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                             | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                              |