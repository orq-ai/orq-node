# Tools1

A function tool definition

## Example Usage

```typescript
import { Tools1 } from "@orq-ai/node/models/operations";

let value: Tools1 = {
  type: "function",
  name: "<value>",
  parameters: {
    type: "object",
    properties: {
      "key": {
        type: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | *"function"*                                                             | :heavy_check_mark:                                                       | The type of tool                                                         |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name of the function to be called                                    |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | A description of what the function does                                  |
| `parameters`                                                             | [operations.ToolsParameters](../../models/operations/toolsparameters.md) | :heavy_check_mark:                                                       | The parameters the function accepts                                      |
| `strict`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether to enable strict schema adherence when generating function calls |