# UpdateDatapoint2DatasetsInputAudio

## Example Usage

```typescript
import { UpdateDatapoint2DatasetsInputAudio } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2DatasetsInputAudio = {
  data: "<value>",
  format: "wav",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Base64 encoded audio data.                                                                             |
| `format`                                                                                               | [operations.UpdateDatapoint2DatasetsFormat](../../models/operations/updatedatapoint2datasetsformat.md) | :heavy_check_mark:                                                                                     | The format of the encoded audio data. Currently supports `wav` and `mp3`.                              |