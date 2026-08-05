# RetrieveAnnotationQueueItemResults1

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResults1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResults1 = {
  flagged: true,
  categories: {
    hate: false,
    hateThreatening: false,
    harassment: true,
    harassmentThreatening: false,
    illicit: false,
    illicitViolent: false,
    selfHarm: true,
    selfHarmIntent: false,
    selfHarmInstructions: true,
    sexual: false,
    sexualMinors: false,
    violence: true,
    violenceGraphic: true,
  },
  categoryScores: {
    hate: 4854.04,
    hateThreatening: 947.32,
    harassment: 16.25,
    harassmentThreatening: 5921.83,
    illicit: 3309.38,
    illicitViolent: 3026.74,
    selfHarm: 2962.64,
    selfHarmIntent: 3911.59,
    selfHarmInstructions: 5009.33,
    sexual: 3302.78,
    sexualMinors: 9454.84,
    violence: 1966.04,
    violenceGraphic: 6948.5,
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `flagged`                                                                                                                                  | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | Whether any of the categories are flagged                                                                                                  |
| `categories`                                                                                                                               | [operations.RetrieveAnnotationQueueItemResultsCategories](../../models/operations/retrieveannotationqueueitemresultscategories.md)         | :heavy_check_mark:                                                                                                                         | A list of the categories, and whether they are flagged or not                                                                              |
| `categoryScores`                                                                                                                           | [operations.RetrieveAnnotationQueueItemResultsCategoryScores](../../models/operations/retrieveannotationqueueitemresultscategoryscores.md) | :heavy_check_mark:                                                                                                                         | A list of the categories along with their scores as predicted by model                                                                     |
| `categoryAppliedInputTypes`                                                                                                                | [operations.ResultsCategoryAppliedInputTypes](../../models/operations/resultscategoryappliedinputtypes.md)                                 | :heavy_minus_sign:                                                                                                                         | A list of the categories along with the input type(s) that the score applies to                                                            |