# ResponseBodyDecisionQuestions

Questions a decision LLM evaluator asks in place of a prompt. Required when `output_type` is `decision`.

## Example Usage

```typescript
import { ResponseBodyDecisionQuestions } from "@orq-ai/node/models/operations";

let value: ResponseBodyDecisionQuestions = {
  questions: {
    "key": {
      type: "choice",
      instructions: "<value>",
    },
  },
  order: [],
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `questions`                                                                                                                           | Record<string, [components.EvaluatorDecisionQuestion](../../models/components/evaluatordecisionquestion.md)>                          | :heavy_check_mark:                                                                                                                    | Questions keyed by name, in the same shape as `questions` in a Decisions request.                                                     |
| `order`                                                                                                                               | *string*[]                                                                                                                            | :heavy_check_mark:                                                                                                                    | Question names in the order the user arranged them, since `questions` is a map and keeps no order. Lists every question exactly once. |