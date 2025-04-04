# TwoInputAudio

## Example Usage

```typescript
import { TwoInputAudio } from "@orq-ai/node/models/components";

let value: TwoInputAudio = {
  data: "<value>",
  format: "wav",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Base64 encoded audio data.                                                |
| `format`                                                                  | [components.TwoFormat](../../models/components/twoformat.md)              | :heavy_check_mark:                                                        | The format of the encoded audio data. Currently supports `wav` and `mp3`. |