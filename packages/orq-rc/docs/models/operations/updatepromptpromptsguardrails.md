# UpdatePromptPromptsGuardrails

## Example Usage

```typescript
import { UpdatePromptPromptsGuardrails } from "@orq-ai/node/models/operations";

let value: UpdatePromptPromptsGuardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *operations.UpdatePromptPromptsId*                                                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `executeOn`                                                                                        | [operations.UpdatePromptPromptsExecuteOn](../../models/operations/updatepromptpromptsexecuteon.md) | :heavy_check_mark:                                                                                 | Determines whether the guardrail runs on the input (user message) or output (model response).      |