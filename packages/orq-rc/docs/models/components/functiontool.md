# FunctionTool

Custom function tool with configurable parameters

## Example Usage

```typescript
import { FunctionTool } from "@orq-ai/node/models/components";

let value: FunctionTool = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.FunctionToolType](../../models/components/functiontooltype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `key`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `displayName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `requiresApproval`                                                         | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `function`                                                                 | [components.FunctionT](../../models/components/functiont.md)               | :heavy_check_mark:                                                         | N/A                                                                        |