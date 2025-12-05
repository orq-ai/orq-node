# AudioContentPartSchema

An audio content part

## Example Usage

```typescript
import { AudioContentPartSchema } from "@orq-ai/node/models/components";

let value: AudioContentPartSchema = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "mp3",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"input_audio"*                                                | :heavy_check_mark:                                             | N/A                                                            |
| `inputAudio`                                                   | [components.InputAudio](../../models/components/inputaudio.md) | :heavy_check_mark:                                             | N/A                                                            |