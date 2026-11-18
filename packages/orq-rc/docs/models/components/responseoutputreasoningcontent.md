# ResponseOutputReasoningContent

A piece of reasoning text.

## Example Usage

```typescript
import { ResponseOutputReasoningContent } from "@orq-ai/node/models/components";

let value: ResponseOutputReasoningContent = {
  text: "<value>",
  type: "reasoning_text",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The text.                                                                                                      |
| `type`                                                                                                         | [components.ResponseOutputReasoningContentType](../../models/components/responseoutputreasoningcontenttype.md) | :heavy_check_mark:                                                                                             | The part type.                                                                                                 |
| `additionalProperties`                                                                                         | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |