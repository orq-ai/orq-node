# SummaryText

A piece of the reasoning summary.

## Example Usage

```typescript
import { SummaryText } from "@orq-ai/node/models/components";

let value: SummaryText = {
  text: "<value>",
  type: "summary_text",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `text`                                                           | *string*                                                         | :heavy_check_mark:                                               | The text.                                                        |
| `type`                                                           | [components.SummaryType](../../models/components/summarytype.md) | :heavy_check_mark:                                               | The part type.                                                   |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |