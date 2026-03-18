# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResults2

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResults2 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResults2 = {
  categories: {
    sexual: false,
    hateAndDiscrimination: true,
    violenceAndThreats: false,
    dangerousAndCriminalContent: false,
    selfharm: false,
    health: false,
    financial: false,
    law: false,
    pii: true,
  },
  categoryScores: {
    sexual: 9745,
    hateAndDiscrimination: 7234.13,
    violenceAndThreats: 9922.12,
    dangerousAndCriminalContent: 8779.97,
    selfharm: 9878.28,
    health: 9782.73,
    financial: 3886.74,
    law: 5000.59,
    pii: 9756.74,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `categories`                                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategories](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresultsannotationqueuecategories.md)         | :heavy_check_mark:                                                                                                                                                                                                   | A list of the categories, and whether they are flagged or not                                                                                                                                                        |
| `categoryScores`                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategoryScores](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresultsannotationqueuecategoryscores.md) | :heavy_check_mark:                                                                                                                                                                                                   | A list of the categories along with their scores as predicted by model                                                                                                                                               |