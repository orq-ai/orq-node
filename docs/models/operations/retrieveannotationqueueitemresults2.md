# RetrieveAnnotationQueueItemResults2

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResults2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResults2 = {
  categories: {
    sexual: false,
    hateAndDiscrimination: true,
    violenceAndThreats: false,
    dangerousAndCriminalContent: false,
    selfharm: false,
    health: true,
    financial: true,
    law: true,
    pii: true,
  },
  categoryScores: {
    sexual: 1768.25,
    hateAndDiscrimination: 9933.18,
    violenceAndThreats: 9773.72,
    dangerousAndCriminalContent: 2534.91,
    selfharm: 9268.11,
    health: 9018.97,
    financial: 1536.66,
    law: 5322.7,
    pii: 1923.25,
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `categories`                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemResultsAnnotationQueuesCategories](../../models/operations/retrieveannotationqueueitemresultsannotationqueuescategories.md)         | :heavy_check_mark:                                                                                                                                                         | A list of the categories, and whether they are flagged or not                                                                                                              |
| `categoryScores`                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemResultsAnnotationQueuesCategoryScores](../../models/operations/retrieveannotationqueueitemresultsannotationqueuescategoryscores.md) | :heavy_check_mark:                                                                                                                                                         | A list of the categories along with their scores as predicted by model                                                                                                     |