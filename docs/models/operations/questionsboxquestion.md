# QuestionsBoxQuestion

Beta, TypeSafe jev-preview only. Locates one target in an image from assets and returns its bounding box. Always returns a box; pair it with a noul question to check presence.

## Example Usage

```typescript
import { QuestionsBoxQuestion } from "@orq-ai/node/models/operations";

let value: QuestionsBoxQuestion = {
  instructions: {
    "key": "<value>",
  },
  type: "box",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `instructions`                                                                     | *operations.CreateDecisionsQuestionsRouterDecisionsRequestRequestBodyInstructions* | :heavy_check_mark:                                                                 | The evaluation prompt for this question. A string, an object or an array.          |
| `type`                                                                             | *"box"*                                                                            | :heavy_check_mark:                                                                 | N/A                                                                                |