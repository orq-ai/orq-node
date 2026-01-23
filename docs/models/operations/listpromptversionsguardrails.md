# ListPromptVersionsGuardrails

## Example Usage

```typescript
import { ListPromptVersionsGuardrails } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *operations.ListPromptVersionsId*                                                                | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `executeOn`                                                                                      | [operations.ListPromptVersionsExecuteOn](../../models/operations/listpromptversionsexecuteon.md) | :heavy_check_mark:                                                                               | Determines whether the guardrail runs on the input (user message) or output (model response).    |