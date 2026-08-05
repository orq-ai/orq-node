# Summary1

A text input to the model.

## Example Usage

```typescript
import { Summary1 } from "@orq-ai/node/models/operations";

let value: Summary1 = {
  text: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | [operations.SummaryType](../../models/operations/summarytype.md) | :heavy_minus_sign:                                               | The type of the input item. Always `input_text`.                 |
| `text`                                                           | *string*                                                         | :heavy_check_mark:                                               | The text input to the model.                                     |