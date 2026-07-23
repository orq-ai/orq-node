# FunctionToolInput

Calls custom function tools defined in the agent configuration. Must reference a pre-created function tool by key or id.

## Example Usage

```typescript
import { FunctionToolInput } from "@orq-ai/node/models/components";

let value: FunctionToolInput = {
  type: "function",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"function"*                                         | :heavy_check_mark:                                   | Function tool type                                   |
| `key`                                                | *string*                                             | :heavy_minus_sign:                                   | The key of the pre-created function tool             |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | The ID of the pre-created function tool              |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |