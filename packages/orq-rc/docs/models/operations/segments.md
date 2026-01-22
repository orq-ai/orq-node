# Segments

## Example Usage

```typescript
import { Segments } from "@orq-ai/node/models/operations";

let value: Segments = {
  id: 8052.9,
  seek: 5978.63,
  start: 5966.55,
  end: 2037.19,
  text: "<value>",
  tokens: [],
  temperature: 9419.16,
  avgLogprob: 6423.34,
  compressionRatio: 8551.5,
  noSpeechProb: 697.76,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_check_mark: | N/A                |
| `seek`             | *number*           | :heavy_check_mark: | N/A                |
| `start`            | *number*           | :heavy_check_mark: | N/A                |
| `end`              | *number*           | :heavy_check_mark: | N/A                |
| `text`             | *string*           | :heavy_check_mark: | N/A                |
| `tokens`           | *number*[]         | :heavy_check_mark: | N/A                |
| `temperature`      | *number*           | :heavy_check_mark: | N/A                |
| `avgLogprob`       | *number*           | :heavy_check_mark: | N/A                |
| `compressionRatio` | *number*           | :heavy_check_mark: | N/A                |
| `noSpeechProb`     | *number*           | :heavy_check_mark: | N/A                |