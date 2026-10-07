# QuestionsScoreQuestion

Places the state on an ordered scale and returns the probability of each level.

## Example Usage

```typescript
import { QuestionsScoreQuestion } from "@orq-ai/node/models/operations";

let value: QuestionsScoreQuestion = {
  criteria: [
    "<value 1>",
  ],
  instructions: {
    "0": "<value 1>",
    "1": "<value 2>",
  },
  type: "score",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `criteria`                                                                | *string*[]                                                                | :heavy_check_mark:                                                        | Ordered level descriptions from lowest to highest. At least two levels.   |
| `instructions`                                                            | *operations.CreateDecisionsQuestionsRouterDecisionsRequestInstructions*   | :heavy_check_mark:                                                        | The evaluation prompt for this question. A string, an object or an array. |
| `type`                                                                    | *"score"*                                                                 | :heavy_check_mark:                                                        | N/A                                                                       |