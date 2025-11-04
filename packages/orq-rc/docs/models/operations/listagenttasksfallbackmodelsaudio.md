# ListAgentTasksFallbackModelsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { ListAgentTasksFallbackModelsAudio } from "@orq-ai/node/models/operations";

let value: ListAgentTasksFallbackModelsAudio = {
  voice: "fable",
  format: "mp3",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                        | [operations.ListAgentTasksFallbackModelsVoice](../../models/operations/listagenttasksfallbackmodelsvoice.md)   | :heavy_check_mark:                                                                                             | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.         |
| `format`                                                                                                       | [operations.ListAgentTasksFallbackModelsFormat](../../models/operations/listagenttasksfallbackmodelsformat.md) | :heavy_check_mark:                                                                                             | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                              |