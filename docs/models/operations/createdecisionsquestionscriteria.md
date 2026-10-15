# CreateDecisionsQuestionsCriteria

Optional descriptions of what true and false mean.

## Example Usage

```typescript
import { CreateDecisionsQuestionsCriteria } from "@orq-ai/node/models/operations";

let value: CreateDecisionsQuestionsCriteria = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `false`                                            | *operations.QuestionsFalse*                        | :heavy_minus_sign:                                 | What false means. A string, an object or an array. |
| `true`                                             | *operations.QuestionsTrue*                         | :heavy_minus_sign:                                 | What true means. A string, an object or an array.  |