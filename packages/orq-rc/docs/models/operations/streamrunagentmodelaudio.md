# StreamRunAgentModelAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { StreamRunAgentModelAudio } from "@orq-ai/node/models/operations";

let value: StreamRunAgentModelAudio = {
  voice: "shimmer",
  format: "opus",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                | [operations.StreamRunAgentModelVoice](../../models/operations/streamrunagentmodelvoice.md)             | :heavy_check_mark:                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer. |
| `format`                                                                                               | [operations.StreamRunAgentModelFormat](../../models/operations/streamrunagentmodelformat.md)           | :heavy_check_mark:                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                      |