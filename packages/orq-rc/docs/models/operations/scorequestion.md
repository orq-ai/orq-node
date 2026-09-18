# ScoreQuestion

Places the state on an ordered scale and returns the probability of each level.

## Example Usage

```typescript
import { ScoreQuestion } from "@orq-ai/node/models/operations";

let value: ScoreQuestion = {
  criteria: [
    "<value 1>",
  ],
  instructions: "<value>",
  type: "score",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `criteria`                                                                | *string*[]                                                                | :heavy_check_mark:                                                        | Ordered level descriptions from lowest to highest. At least two levels.   |
| `instructions`                                                            | *operations.CreateClassifyQuestionsInstructions*                          | :heavy_check_mark:                                                        | The evaluation prompt for this question. A string, an object or an array. |
| `type`                                                                    | *"score"*                                                                 | :heavy_check_mark:                                                        | N/A                                                                       |