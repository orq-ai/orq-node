# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResults1

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResults1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResults1 = {
  flagged: true,
  categories: {
    hate: true,
    hateThreatening: false,
    harassment: true,
    harassmentThreatening: false,
    illicit: false,
    illicitViolent: false,
    selfHarm: true,
    selfHarmIntent: false,
    selfHarmInstructions: false,
    sexual: false,
    sexualMinors: true,
    violence: true,
    violenceGraphic: false,
  },
  categoryScores: {
    hate: 7492.35,
    hateThreatening: 418.83,
    harassment: 9782.18,
    harassmentThreatening: 3978.76,
    illicit: 9821.22,
    illicitViolent: 2259.31,
    selfHarm: 3804.53,
    selfHarmIntent: 1519.77,
    selfHarmInstructions: 1385.52,
    sexual: 5351.69,
    sexualMinors: 3163.58,
    violence: 4212.99,
    violenceGraphic: 6062.32,
  },
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flagged`                                                                                                                                                                              | *boolean*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                     | Whether any of the categories are flagged                                                                                                                                              |
| `categories`                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsCategories](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresultscategories.md)         | :heavy_check_mark:                                                                                                                                                                     | A list of the categories, and whether they are flagged or not                                                                                                                          |
| `categoryScores`                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsCategoryScores](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresultscategoryscores.md) | :heavy_check_mark:                                                                                                                                                                     | A list of the categories along with their scores as predicted by model                                                                                                                 |
| `categoryAppliedInputTypes`                                                                                                                                                            | [operations.ResultsCategoryAppliedInputTypes](../../models/operations/resultscategoryappliedinputtypes.md)                                                                             | :heavy_minus_sign:                                                                                                                                                                     | A list of the categories along with the input type(s) that the score applies to                                                                                                        |