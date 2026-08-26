# Audio

If the audio output modality is requested, this object contains data about the audio response from the model.

## Example Usage

```typescript
import { Audio } from "@orq-ai/node/models/components";

let value: Audio = {
  id: "<id>",
  expiresAt: 932724,
  data: "<value>",
  transcript: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | N/A                |
| `data`             | *string*           | :heavy_check_mark: | N/A                |
| `transcript`       | *string*           | :heavy_check_mark: | N/A                |