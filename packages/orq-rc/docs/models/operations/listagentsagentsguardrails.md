# ListAgentsAgentsGuardrails

## Example Usage

```typescript
import { ListAgentsAgentsGuardrails } from "@orq-ai/node/models/operations";

let value: ListAgentsAgentsGuardrails = {
  id: "orq_pii_detection",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *operations.ListAgentsId*                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `executeOn`                                                                                                  | [operations.ListAgentsAgentsResponseExecuteOn](../../models/operations/listagentsagentsresponseexecuteon.md) | :heavy_check_mark:                                                                                           | Determines whether the guardrail runs on the input (user message) or output (model response).                |