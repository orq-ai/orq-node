# One1

A text input to the model.

## Example Usage

```typescript
import { One1 } from "@orq-ai/node/models/operations";

let value: One1 = {
  text: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | [operations.OneType](../../models/operations/onetype.md) | :heavy_minus_sign:                                       | The type of the input item. Always `input_text`.         |
| `text`                                                   | *string*                                                 | :heavy_check_mark:                                       | The text input to the model.                             |