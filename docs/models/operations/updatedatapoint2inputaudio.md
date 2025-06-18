# UpdateDatapoint2InputAudio

## Example Usage

```typescript
import { UpdateDatapoint2InputAudio } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2InputAudio = {
  data: "<value>",
  format: "mp3",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Base64 encoded audio data.                                                             |
| `format`                                                                               | [operations.UpdateDatapoint2Format](../../models/operations/updatedatapoint2format.md) | :heavy_check_mark:                                                                     | The format of the encoded audio data. Currently supports `wav` and `mp3`.              |