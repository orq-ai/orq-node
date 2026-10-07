# QuestionsChoiceQuestion

Picks one of the given options and returns the probability of each.

## Example Usage

```typescript
import { QuestionsChoiceQuestion } from "@orq-ai/node/models/operations";

let value: QuestionsChoiceQuestion = {
  criteria: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  instructions: "<value>",
  type: "choice",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `criteria`                                                                | Record<string, *string*>                                                  | :heavy_check_mark:                                                        | Options keyed by name, each mapped to a description or null.              |
| `instructions`                                                            | *operations.CreateDecisionsQuestionsRouterDecisionsInstructions*          | :heavy_check_mark:                                                        | The evaluation prompt for this question. A string, an object or an array. |
| `type`                                                                    | *"choice"*                                                                | :heavy_check_mark:                                                        | N/A                                                                       |