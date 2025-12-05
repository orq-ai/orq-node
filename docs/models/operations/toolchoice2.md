# ToolChoice2

## Example Usage

```typescript
import { ToolChoice2 } from "@orq-ai/node/models/operations";

let value: ToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.ToolChoiceType](../../models/operations/toolchoicetype.md)         | :heavy_minus_sign:                                                             | The type of the tool. Currently, only function is supported.                   |
| `function`                                                                     | [operations.ToolChoiceFunction](../../models/operations/toolchoicefunction.md) | :heavy_check_mark:                                                             | N/A                                                                            |