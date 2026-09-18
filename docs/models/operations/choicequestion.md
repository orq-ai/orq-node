# ChoiceQuestion

Picks one of the given options and returns the probability of each.

## Example Usage

```typescript
import { ChoiceQuestion } from "@orq-ai/node/models/operations";

let value: ChoiceQuestion = {
  criteria: {},
  instructions: "<value>",
  type: "choice",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `criteria`                                                                | Record<string, *string*>                                                  | :heavy_check_mark:                                                        | Options keyed by name, each mapped to a description or null.              |
| `instructions`                                                            | *operations.QuestionsInstructions*                                        | :heavy_check_mark:                                                        | The evaluation prompt for this question. A string, an object or an array. |
| `type`                                                                    | *"choice"*                                                                | :heavy_check_mark:                                                        | N/A                                                                       |