# CreatePromptPromptsGuardrails

## Example Usage

```typescript
import { CreatePromptPromptsGuardrails } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *operations.CreatePromptPromptsId*                                                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `executeOn`                                                                                        | [operations.CreatePromptPromptsExecuteOn](../../models/operations/createpromptpromptsexecuteon.md) | :heavy_check_mark:                                                                                 | Determines whether the guardrail runs on the input (user message) or output (model response).      |