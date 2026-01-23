# GetAllPromptsGuardrails

## Example Usage

```typescript
import { GetAllPromptsGuardrails } from "@orq-ai/node/models/operations";

let value: GetAllPromptsGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *operations.GetAllPromptsId*                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executeOn`                                                                                   | [operations.GetAllPromptsExecuteOn](../../models/operations/getallpromptsexecuteon.md)        | :heavy_check_mark:                                                                            | Determines whether the guardrail runs on the input (user message) or output (model response). |