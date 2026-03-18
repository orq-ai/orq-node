# OutputSegments

## Example Usage

```typescript
import { OutputSegments } from "@orq-ai/node/models/operations";

let value: OutputSegments = {
  id: 5249.03,
  seek: 6664.39,
  start: 1505.65,
  end: 4844.41,
  text: "<value>",
  tokens: [
    8570.37,
    1431.48,
    5640.95,
  ],
  temperature: 8261.9,
  avgLogprob: 7066.63,
  compressionRatio: 4372.46,
  noSpeechProb: 8891.62,
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