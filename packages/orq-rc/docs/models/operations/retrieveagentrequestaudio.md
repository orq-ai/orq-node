# RetrieveAgentRequestAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { RetrieveAgentRequestAudio } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestAudio = {
  voice: "onyx",
  format: "wav",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                | [operations.RetrieveAgentRequestVoice](../../models/operations/retrieveagentrequestvoice.md)           | :heavy_check_mark:                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer. |
| `format`                                                                                               | [operations.RetrieveAgentRequestFormat](../../models/operations/retrieveagentrequestformat.md)         | :heavy_check_mark:                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                      |