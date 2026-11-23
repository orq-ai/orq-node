# ClassifyBoxAnswer

## Example Usage

```typescript
import { ClassifyBoxAnswer } from "@orq-ai/node/models/components";

let value: ClassifyBoxAnswer = {
  box: {
    bottom: 5088.18,
    left: 6889.1,
    right: 4459.51,
    top: 178.25,
  },
  type: "box",
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `box`                                                                                                                                                                                                      | [components.ClassifyBox](../../models/components/classifybox.md)                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |
| `confidence`                                                                                                                                                                                               | *number*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                         | How sure the model is of its answer. The provider returns its own confidence value, which can be below the largest probability. Present for choice, score and box answers, and native Gemini noul answers. |
| `type`                                                                                                                                                                                                     | *"box"*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |