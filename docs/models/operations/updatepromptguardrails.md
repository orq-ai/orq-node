# UpdatePromptGuardrails

## Example Usage

```typescript
import { UpdatePromptGuardrails } from "@orq-ai/node/models/operations";

let value: UpdatePromptGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.UpdatePromptId*                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.UpdatePromptExecuteOn](../../models/operations/updatepromptexecuteon.md)          | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |