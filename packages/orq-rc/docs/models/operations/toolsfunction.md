# ToolsFunction

A function tool the model can call.

## Example Usage

```typescript
import { ToolsFunction } from "@orq-ai/node/models/operations";

let value: ToolsFunction = {
  name: "<value>",
  type: "function",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | A description of what the function does.                                 |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name of the function.                                                |
| `parameters`                                                             | [operations.ToolsParameters](../../models/operations/toolsparameters.md) | :heavy_minus_sign:                                                       | The parameters the function accepts, as a JSON Schema object.            |
| `strict`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether to enforce strict parameter validation.                          |
| `type`                                                                   | *"function"*                                                             | :heavy_check_mark:                                                       | N/A                                                                      |