# CreateChatCompletionProxyAudio

If the audio output modality is requested, this object contains data about the audio response from the model.

## Example Usage

```typescript
import { CreateChatCompletionProxyAudio } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionProxyAudio = {
  id: "<id>",
  expiresAt: 936329,
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