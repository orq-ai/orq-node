# Content1

Text output from the model

## Example Usage

```typescript
import { Content1 } from "@orq-ai/node/models/operations";

let value: Content1 = {
  type: "output_text",
  text: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | [operations.ContentType](../../models/operations/contenttype.md) | :heavy_check_mark:                                               | The type of content part                                         |
| `text`                                                           | *string*                                                         | :heavy_check_mark:                                               | The text content                                                 |
| `annotations`                                                    | *operations.ContentAnnotations*[]                                | :heavy_minus_sign:                                               | Annotations in the text such as citations                        |
| `logprobs`                                                       | *any*[]                                                          | :heavy_minus_sign:                                               | Log probabilities of the output tokens if requested              |