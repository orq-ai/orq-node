# CodeInterpreterToolInput

Executes model-written Python code. Uses provider-native code execution when the model supports it, otherwise a secure orq-managed sandbox.

## Example Usage

```typescript
import { CodeInterpreterToolInput } from "@orq-ai/node/models/components";

let value: CodeInterpreterToolInput = {
  type: "code_interpreter",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"code_interpreter"*                                                                                | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |