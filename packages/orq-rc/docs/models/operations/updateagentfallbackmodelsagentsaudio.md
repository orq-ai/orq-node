# UpdateAgentFallbackModelsAgentsAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { UpdateAgentFallbackModelsAgentsAudio } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelsAgentsAudio = {
  voice: "alloy",
  format: "pcm16",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                              | [operations.UpdateAgentFallbackModelsAgentsVoice](../../models/operations/updateagentfallbackmodelsagentsvoice.md)   | :heavy_check_mark:                                                                                                   | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.               |
| `format`                                                                                                             | [operations.UpdateAgentFallbackModelsAgentsFormat](../../models/operations/updateagentfallbackmodelsagentsformat.md) | :heavy_check_mark:                                                                                                   | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                    |