# GetPromptVersionGuardrails

## Example Usage

```typescript
import { GetPromptVersionGuardrails } from "@orq-ai/node/models/operations";

let value: GetPromptVersionGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.GetPromptVersionId*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.GetPromptVersionExecuteOn](../../models/operations/getpromptversionexecuteon.md)  | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |