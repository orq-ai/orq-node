# RetrieveAnnotationQueueItemResultsCategoryScores

A list of the categories along with their scores as predicted by model

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResultsCategoryScores } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResultsCategoryScores = {
  hate: 8489.81,
  hateThreatening: 5449.92,
  harassment: 1243.85,
  harassmentThreatening: 4968.62,
  illicit: 6399.28,
  illicitViolent: 9841.18,
  selfHarm: 2703.18,
  selfHarmIntent: 4081.83,
  selfHarmInstructions: 7446.03,
  sexual: 2947.21,
  sexualMinors: 7584.86,
  violence: 9510.38,
  violenceGraphic: 8303.75,
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