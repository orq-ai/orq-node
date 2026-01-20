# GetOnePromptGuardrails

## Example Usage

```typescript
import { GetOnePromptGuardrails } from "@orq-ai/node/models/operations";

let value: GetOnePromptGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.GetOnePromptId*                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.GetOnePromptExecuteOn](../../models/operations/getonepromptexecuteon.md)          | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |