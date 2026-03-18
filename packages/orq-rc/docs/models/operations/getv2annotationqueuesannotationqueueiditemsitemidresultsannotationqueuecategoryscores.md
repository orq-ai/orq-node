# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategoryScores

A list of the categories along with their scores as predicted by model

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategoryScores,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategoryScores =
    {
      sexual: 3122.09,
      hateAndDiscrimination: 7508.85,
      violenceAndThreats: 6316.56,
      dangerousAndCriminalContent: 5983.68,
      selfharm: 4474.41,
      health: 2112.19,
      financial: 8719.38,
      law: 3076.69,
      pii: 3776.59,
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