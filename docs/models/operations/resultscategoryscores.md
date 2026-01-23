# ResultsCategoryScores

A list of the categories along with their scores as predicted by model

## Example Usage

```typescript
import { ResultsCategoryScores } from "@orq-ai/node/models/operations";

let value: ResultsCategoryScores = {
  sexual: 4340.7,
  hateAndDiscrimination: 659.84,
  violenceAndThreats: 9671.63,
  dangerousAndCriminalContent: 8232.39,
  selfharm: 2087.87,
  health: 4879.32,
  financial: 1307.68,
  law: 2523.73,
  pii: 3433.05,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `sexual`                                          | *number*                                          | :heavy_check_mark:                                | The score for sexual content                      |
| `hateAndDiscrimination`                           | *number*                                          | :heavy_check_mark:                                | The score for hate and discrimination content     |
| `violenceAndThreats`                              | *number*                                          | :heavy_check_mark:                                | The score for violence and threats content        |
| `dangerousAndCriminalContent`                     | *number*                                          | :heavy_check_mark:                                | The score for dangerous and criminal content      |
| `selfharm`                                        | *number*                                          | :heavy_check_mark:                                | The score for self-harm content                   |
| `health`                                          | *number*                                          | :heavy_check_mark:                                | The score for unqualified health advice           |
| `financial`                                       | *number*                                          | :heavy_check_mark:                                | The score for unqualified financial advice        |
| `law`                                             | *number*                                          | :heavy_check_mark:                                | The score for unqualified legal advice            |
| `pii`                                             | *number*                                          | :heavy_check_mark:                                | The score for personally identifiable information |