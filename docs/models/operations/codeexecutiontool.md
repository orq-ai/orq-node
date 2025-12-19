# CodeExecutionTool

Executes code snippets in a sandboxed environment. Must reference a pre-created code tool by key or id.

## Example Usage

```typescript
import { CodeExecutionTool } from "@orq-ai/node/models/operations";

let value: CodeExecutionTool = {
  type: "code",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"code"*                                             | :heavy_check_mark:                                   | Code execution tool type                             |
| `key`                                                | *string*                                             | :heavy_minus_sign:                                   | The key of the pre-created code tool                 |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | The ID of the pre-created code tool                  |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |