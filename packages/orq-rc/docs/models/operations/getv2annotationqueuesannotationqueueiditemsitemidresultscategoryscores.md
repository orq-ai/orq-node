# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsCategoryScores

A list of the categories along with their scores as predicted by model

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsCategoryScores } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsCategoryScores = {
    hate: 306.35,
    hateThreatening: 4211.24,
    harassment: 8227.32,
    harassmentThreatening: 581.11,
    illicit: 6271.58,
    illicitViolent: 374.01,
    selfHarm: 5667.16,
    selfHarmIntent: 9967.97,
    selfHarmInstructions: 1502.24,
    sexual: 7906.11,
    sexualMinors: 5668.66,
    violence: 4020.16,
    violenceGraphic: 1772.3,
  };
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `hate`                                            | *number*                                          | :heavy_check_mark:                                | The score for the category hate                   |
| `hateThreatening`                                 | *number*                                          | :heavy_check_mark:                                | The score for the category hate/threatening       |
| `harassment`                                      | *number*                                          | :heavy_check_mark:                                | The score for the category harassment             |
| `harassmentThreatening`                           | *number*                                          | :heavy_check_mark:                                | The score for the category harassment/threatening |
| `illicit`                                         | *number*                                          | :heavy_check_mark:                                | The score for the category illicit                |
| `illicitViolent`                                  | *number*                                          | :heavy_check_mark:                                | The score for the category illicit/violent        |
| `selfHarm`                                        | *number*                                          | :heavy_check_mark:                                | The score for the category self-harm              |
| `selfHarmIntent`                                  | *number*                                          | :heavy_check_mark:                                | The score for the category self-harm/intent       |
| `selfHarmInstructions`                            | *number*                                          | :heavy_check_mark:                                | The score for the category self-harm/instructions |
| `sexual`                                          | *number*                                          | :heavy_check_mark:                                | The score for the category sexual                 |
| `sexualMinors`                                    | *number*                                          | :heavy_check_mark:                                | The score for the category sexual/minors          |
| `violence`                                        | *number*                                          | :heavy_check_mark:                                | The score for the category violence               |
| `violenceGraphic`                                 | *number*                                          | :heavy_check_mark:                                | The score for the category violence/graphic       |