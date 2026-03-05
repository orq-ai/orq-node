# ListAgentsDataGuardrails

## Example Usage

```typescript
import { ListAgentsDataGuardrails } from "@orq-ai/node/models/operations";

let value: ListAgentsDataGuardrails = {
  id: "orq_harmful_moderation",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *operations.DataId*                                                                                  | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `executeOn`                                                                                          | [operations.ListAgentsDataAgentsExecuteOn](../../models/operations/listagentsdataagentsexecuteon.md) | :heavy_check_mark:                                                                                   | Determines whether the guardrail runs on the input (user message) or output (model response).        |