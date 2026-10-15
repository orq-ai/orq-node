# QuestionsChoiceQuestion

Picks one of the given options and returns the probability of each.

## Example Usage

```typescript
import { QuestionsChoiceQuestion } from "@orq-ai/node/models/operations";

let value: QuestionsChoiceQuestion = {
  criteria: {
    "key": "<value>",
  },
  instructions: {},
  type: "choice",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `criteria`                                                                                                         | Record<string, *operations.CreateDecisionsQuestionsRouterDecisionsCriteria*>                                       | :heavy_check_mark:                                                                                                 | Options keyed by name, each mapped to a description or null. A description can be a string, an object or an array. |
| `instructions`                                                                                                     | *operations.CreateDecisionsQuestionsRouterDecisionsInstructions*                                                   | :heavy_check_mark:                                                                                                 | The evaluation prompt for this question. A string, an object or an array.                                          |
| `type`                                                                                                             | *"choice"*                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |