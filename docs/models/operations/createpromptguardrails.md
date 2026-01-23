# CreatePromptGuardrails

## Example Usage

```typescript
import { CreatePromptGuardrails } from "@orq-ai/node/models/operations";

let value: CreatePromptGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.CreatePromptId*                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.CreatePromptExecuteOn](../../models/operations/createpromptexecuteon.md)          | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |