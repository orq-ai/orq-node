# InvokeEval22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { InvokeEval22 } from "@orq-ai/node/models/operations";

let value: InvokeEval22 = {
  type: "image_url",
  imageUrl: {
    url: "https://unwilling-obedience.com/",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.InvokeEval2EvalsType](../../models/operations/invokeeval2evalstype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `imageUrl`                                                                         | [operations.InvokeEval2ImageUrl](../../models/operations/invokeeval2imageurl.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |