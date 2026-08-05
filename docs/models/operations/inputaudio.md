# InputAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { InputAudio } from "@orq-ai/node/models/operations";

let value: InputAudio = {
  voice: "echo",
  format: "pcm16",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                | [operations.InputVoice](../../models/operations/inputvoice.md)                                         | :heavy_check_mark:                                                                                     | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer. |
| `format`                                                                                               | [operations.InputFormat](../../models/operations/inputformat.md)                                       | :heavy_check_mark:                                                                                     | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                      |