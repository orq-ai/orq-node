# BoxQuestion

Beta, TypeSafe jev-preview only. Locates one target in an image from assets and returns its bounding box. Always returns a box; pair it with a noul question to check presence.

## Example Usage

```typescript
import { BoxQuestion } from "@orq-ai/node/models/operations";

let value: BoxQuestion = {
  instructions: {},
  type: "box",
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instructions`                                                                                                                                                                                                       | *operations.CreateClassifyQuestionsRouterClassifyInstructions*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                   | The evaluation prompt for this question. A string, an object or an array. Native OpenAI also accepts arrays of input_text, input_image and input_json parts. Question parts cannot contain prompt cache breakpoints. |
| `type`                                                                                                                                                                                                               | *"box"*                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |