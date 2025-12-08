# InvokeAgentA2ATaskResponse

Response format following the Agent-to-Agent (A2A) protocol. Returned when starting or continuing an agent task execution.

## Example Usage

```typescript
import { InvokeAgentA2ATaskResponse } from "@orq-ai/node/models/operations";

let value: InvokeAgentA2ATaskResponse = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "rejected",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The unique ID of the created agent execution task                            |
| `contextId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The correlation ID for this execution (used for tracking)                    |
| `kind`                                                                       | [operations.Kind](../../models/operations/kind.md)                           | :heavy_check_mark:                                                           | A2A entity type identifier                                                   |
| `status`                                                                     | [operations.TaskStatus](../../models/operations/taskstatus.md)               | :heavy_check_mark:                                                           | Current task status information                                              |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Task metadata containing workspace_id and trace_id for feedback and tracking |