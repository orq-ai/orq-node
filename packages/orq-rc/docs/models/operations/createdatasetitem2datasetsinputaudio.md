# CreateDatasetItem2DatasetsInputAudio

## Example Usage

```typescript
import { CreateDatasetItem2DatasetsInputAudio } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2DatasetsInputAudio = {
  data: "<value>",
  format: "wav",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Base64 encoded audio data.                                                                                 |
| `format`                                                                                                   | [operations.CreateDatasetItem2DatasetsFormat](../../models/operations/createdatasetitem2datasetsformat.md) | :heavy_check_mark:                                                                                         | The format of the encoded audio data. Currently supports `wav` and `mp3`.                                  |