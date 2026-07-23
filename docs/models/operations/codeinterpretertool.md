# CodeInterpreterTool

Executes model-written Python code. Uses provider-native code execution when the model supports it, otherwise a secure orq-managed sandbox.

## Example Usage

```typescript
import { CodeInterpreterTool } from "@orq-ai/node/models/operations";

let value: CodeInterpreterTool = {
  type: "code_interpreter",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"code_interpreter"*                                                                                | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |