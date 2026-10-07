# QuestionsNoulQuestion

Answers with a probability between 0 and 1 that the statement holds.

## Example Usage

```typescript
import { QuestionsNoulQuestion } from "@orq-ai/node/models/operations";

let value: QuestionsNoulQuestion = {
  instructions: {},
  type: "noul",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `criteria`                                                                   | [operations.QuestionsCriteria](../../models/operations/questionscriteria.md) | :heavy_minus_sign:                                                           | Optional descriptions of what true and false mean.                           |
| `instructions`                                                               | *operations.CreateDecisionsQuestionsInstructions*                            | :heavy_check_mark:                                                           | The evaluation prompt for this question. A string, an object or an array.    |
| `type`                                                                       | *"noul"*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |