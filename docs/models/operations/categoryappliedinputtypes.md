# CategoryAppliedInputTypes

A list of the categories along with the input type(s) that the score applies to

## Example Usage

```typescript
import { CategoryAppliedInputTypes } from "@orq-ai/node/models/operations";

let value: CategoryAppliedInputTypes = {
  hate: [
    "<value 1>",
  ],
  hateThreatening: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  harassment: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  harassmentThreatening: [
    "<value 1>",
    "<value 2>",
  ],
  illicit: [
    "<value 1>",
  ],
  illicitViolent: [
    "<value 1>",
  ],
  selfHarm: [
    "<value 1>",
  ],
  selfHarmIntent: [],
  selfHarmInstructions: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  sexual: [],
  sexualMinors: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  violence: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  violenceGraphic: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `hate`                                                            | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category hate                   |
| `hateThreatening`                                                 | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category hate/threatening       |
| `harassment`                                                      | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category harassment             |
| `harassmentThreatening`                                           | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category harassment/threatening |
| `illicit`                                                         | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category illicit                |
| `illicitViolent`                                                  | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category illicit/violent        |
| `selfHarm`                                                        | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category self-harm              |
| `selfHarmIntent`                                                  | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category self-harm/intent       |
| `selfHarmInstructions`                                            | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category self-harm/instructions |
| `sexual`                                                          | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category sexual                 |
| `sexualMinors`                                                    | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category sexual/minors          |
| `violence`                                                        | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category violence               |
| `violenceGraphic`                                                 | *string*[]                                                        | :heavy_check_mark:                                                | The applied input type(s) for the category violence/graphic       |