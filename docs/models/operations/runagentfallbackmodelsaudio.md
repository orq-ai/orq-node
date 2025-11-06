# RunAgentFallbackModelsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { RunAgentFallbackModelsAudio } from "@orq-ai/node/models/operations";

let value: RunAgentFallbackModelsAudio = {
  voice: "onyx",
  format: "pcm16",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                | [operations.RunAgentFallbackModelsVoice](../../models/operations/runagentfallbackmodelsvoice.md)       | :heavy_check_mark:                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer. |
| `format`                                                                                               | [operations.RunAgentFallbackModelsFormat](../../models/operations/runagentfallbackmodelsformat.md)     | :heavy_check_mark:                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                      |