# StreamRunAgentModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { StreamRunAgentModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: StreamRunAgentModelConfigurationAudio = {
  voice: "onyx",
  format: "wav",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                                | [operations.StreamRunAgentModelConfigurationVoice](../../models/operations/streamrunagentmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                 |
| `format`                                                                                                               | [operations.StreamRunAgentModelConfigurationFormat](../../models/operations/streamrunagentmodelconfigurationformat.md) | :heavy_check_mark:                                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                      |