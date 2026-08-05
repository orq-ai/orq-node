# RetrieveAnnotationQueueItemResultsAnnotationQueuesCategoryScores

A list of the categories along with their scores as predicted by model

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResultsAnnotationQueuesCategoryScores } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResultsAnnotationQueuesCategoryScores = {
  sexual: 9002.11,
  hateAndDiscrimination: 2484.34,
  violenceAndThreats: 8164.47,
  dangerousAndCriminalContent: 3738.61,
  selfharm: 8389.84,
  health: 1180.15,
  financial: 283.62,
  law: 1753.28,
  pii: 2695.83,
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