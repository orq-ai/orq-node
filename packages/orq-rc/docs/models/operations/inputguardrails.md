# InputGuardrails

## Example Usage

```typescript
import { InputGuardrails } from "@orq-ai/node/models/operations";

let value: InputGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.InputId*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.InputExecuteOn](../../models/operations/inputexecuteon.md)                        | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |