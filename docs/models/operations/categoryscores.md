# CategoryScores

A list of the categories along with their scores as predicted by model

## Example Usage

```typescript
import { CategoryScores } from "@orq-ai/node/models/operations";

let value: CategoryScores = {
  hate: 3432.17,
  hateThreatening: 3850.08,
  harassment: 31.94,
  harassmentThreatening: 7227.61,
  illicit: 7967.92,
  illicitViolent: 8440.26,
  selfHarm: 1265.1,
  selfHarmIntent: 1015.51,
  selfHarmInstructions: 3428.11,
  sexual: 4754.66,
  sexualMinors: 9797.55,
  violence: 6067.15,
  violenceGraphic: 1399.22,
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