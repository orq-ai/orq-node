# Guardrails

## Example Usage

```typescript
import { Guardrails } from "@orq-ai/node/models/operations";

let value: Guardrails = {
  id: "<id>",
  executeOn: "input",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Unique key or identifier of the evaluator                                                                                                                              |
| `sampleRate`                                                                                                                                                           | *number*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | The percentage of executions to evaluate with this evaluator (1-100). For example, a value of 50 means the evaluator will run on approximately half of the executions. |
| `executeOn`                                                                                                                                                            | [operations.CreateAgentRequestExecuteOn](../../models/operations/createagentrequestexecuteon.md)                                                                       | :heavy_check_mark:                                                                                                                                                     | Determines whether the evaluator runs on the agent input (user message) or output (agent response).                                                                    |