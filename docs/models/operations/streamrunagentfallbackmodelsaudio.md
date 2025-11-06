# StreamRunAgentFallbackModelsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { StreamRunAgentFallbackModelsAudio } from "@orq-ai/node/models/operations";

let value: StreamRunAgentFallbackModelsAudio = {
  voice: "shimmer",
  format: "opus",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                        | [operations.StreamRunAgentFallbackModelsVoice](../../models/operations/streamrunagentfallbackmodelsvoice.md)   | :heavy_check_mark:                                                                                             | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.         |
| `format`                                                                                                       | [operations.StreamRunAgentFallbackModelsFormat](../../models/operations/streamrunagentfallbackmodelsformat.md) | :heavy_check_mark:                                                                                             | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                              |