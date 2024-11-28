# ToolCalls

## Example Usage

```typescript
import { ToolCalls } from "@orq-ai/node/models/components";

let value: ToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `index`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `type`                                                       | [components.Type](../../models/components/type.md)           | :heavy_check_mark:                                           | N/A                                                          |
| `function`                                                   | [components.FunctionT](../../models/components/functiont.md) | :heavy_check_mark:                                           | N/A                                                          |