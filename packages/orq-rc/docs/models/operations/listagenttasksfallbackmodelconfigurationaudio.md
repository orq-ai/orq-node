# ListAgentTasksFallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { ListAgentTasksFallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: ListAgentTasksFallbackModelConfigurationAudio = {
  voice: "fable",
  format: "mp3",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                                | [operations.ListAgentTasksFallbackModelConfigurationVoice](../../models/operations/listagenttasksfallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                                 |
| `format`                                                                                                                               | [operations.ListAgentTasksFallbackModelConfigurationFormat](../../models/operations/listagenttasksfallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                      |