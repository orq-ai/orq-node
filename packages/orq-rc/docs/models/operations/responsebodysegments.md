# ResponseBodySegments

## Example Usage

```typescript
import { ResponseBodySegments } from "@orq-ai/node/models/operations";

let value: ResponseBodySegments = {
  id: 8301.47,
  seek: 1023.64,
  start: 1947.95,
  end: 6764.82,
  text: "<value>",
  tokens: [
    7353.29,
    8499.86,
  ],
  temperature: 4562.95,
  avgLogprob: 8354.63,
  compressionRatio: 8125.96,
  noSpeechProb: 2844.31,
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