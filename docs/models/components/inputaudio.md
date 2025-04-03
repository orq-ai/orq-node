# InputAudio

## Example Usage

```typescript
import { InputAudio } from "@orq-ai/node/models/components";

let value: InputAudio = {
  data: "<value>",
  format: "mp3",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Base64 encoded audio data.                                                |
| `format`                                                                  | [components.Format](../../models/components/format.md)                    | :heavy_check_mark:                                                        | The format of the encoded audio data. Currently supports `wav` and `mp3`. |