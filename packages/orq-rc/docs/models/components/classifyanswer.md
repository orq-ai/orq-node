# ClassifyAnswer

## Example Usage

```typescript
import { ClassifyAnswer } from "@orq-ai/node/models/components";

let value: ClassifyAnswer = {
  type: "score",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `choice`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The selected option. Present for choice answers.                                           |
| `confidence`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | Probability of the selected option or level. Present for choice and score answers.         |
| `legend`                                                                                   | Record<string, *string*>                                                                   | :heavy_minus_sign:                                                                         | Level index to level description. Present for score answers.                               |
| `noul`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | Probability between 0 and 1 that the statement holds. Present for noul answers.            |
| `probabilities`                                                                            | Record<string, *number*>                                                                   | :heavy_minus_sign:                                                                         | Probability distribution over the options or levels. Present for choice and score answers. |
| `score`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | The selected level index. Present for score answers.                                       |
| `type`                                                                                     | [components.ClassifyAnswerType](../../models/components/classifyanswertype.md)             | :heavy_check_mark:                                                                         | The question type this answer belongs to.                                                  |