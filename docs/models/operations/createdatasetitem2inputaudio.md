# CreateDatasetItem2InputAudio

## Example Usage

```typescript
import { CreateDatasetItem2InputAudio } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2InputAudio = {
  data: "<value>",
  format: "wav",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Base64 encoded audio data.                                                                 |
| `format`                                                                                   | [operations.CreateDatasetItem2Format](../../models/operations/createdatasetitem2format.md) | :heavy_check_mark:                                                                         | The format of the encoded audio data. Currently supports `wav` and `mp3`.                  |