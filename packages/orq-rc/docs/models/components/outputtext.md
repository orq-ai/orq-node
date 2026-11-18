# OutputText

Text written by the model.

## Example Usage

```typescript
import { OutputText } from "@orq-ai/node/models/components";

let value: OutputText = {
  text: "<value>",
  type: "output_text",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `annotations`                                                                                              | Record<string, *any*>[]                                                                                    | :heavy_minus_sign:                                                                                         | Annotations on the text, such as URL citations.                                                            |
| `logprobs`                                                                                                 | Record<string, *any*>[]                                                                                    | :heavy_minus_sign:                                                                                         | Token log probabilities, when requested.                                                                   |
| `text`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The text.                                                                                                  |
| `type`                                                                                                     | [components.ResponseOutputMessageContentType](../../models/components/responseoutputmessagecontenttype.md) | :heavy_check_mark:                                                                                         | The part type.                                                                                             |
| `additionalProperties`                                                                                     | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |