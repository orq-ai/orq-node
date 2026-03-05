# CreateAgentRequestResponseBodyGuardrails

## Example Usage

```typescript
import { CreateAgentRequestResponseBodyGuardrails } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestResponseBodyGuardrails = {
  id: "<id>",
  executeOn: "output",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *operations.ResponseBodyId*                                                                                                          | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `executeOn`                                                                                                                          | [operations.CreateAgentRequestResponseBodyAgentsExecuteOn](../../models/operations/createagentrequestresponsebodyagentsexecuteon.md) | :heavy_check_mark:                                                                                                                   | Determines whether the guardrail runs on the input (user message) or output (model response).                                        |