# ModelArtificialAnalysis

## Example Usage

```typescript
import { ModelArtificialAnalysis } from "@orq-ai/node/models/components";

let value: ModelArtificialAnalysis = {
  slug: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `slug`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Artificial Analysis model slug.                                                                                   |
| `intelligenceIndex`                                                                                               | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Artificial Analysis intelligence index. Absent when unmeasured.                                                   |
| `evaluations`                                                                                                     | [components.Evaluations](../../models/components/evaluations.md)                                                  | :heavy_minus_sign:                                                                                                | Benchmark scores by evaluation key. A `null` value means the<br/> evaluation exists but is unmeasured for this model. |
| `releaseDate`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Artificial Analysis recorded release date. Empty when unknown.                                                    |
| `medianOutputTokensPerSecond`                                                                                     | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Measured output throughput, tokens per second. Absent when unmeasured.                                            |
| `medianTimeToFirstTokenSeconds`                                                                                   | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Measured time to first token, seconds. Absent when unmeasured.                                                    |