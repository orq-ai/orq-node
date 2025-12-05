# AgentExecutionStartedStreamingEvent

Initial event emitted when an agent stream begins. Contains the task ID for tracking, workspace context, and trace ID for observability.

## Example Usage

```typescript
import { AgentExecutionStartedStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentExecutionStartedStreamingEvent = {
  type: "agents.execution_started",
  timestamp: "<value>",
  data: {
    agentTaskId: "<id>",
    workspaceId: "<id>",
    traceId: "<id>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *"agents.execution_started"*                       | :heavy_check_mark:                                 | N/A                                                |
| `timestamp`                                        | *string*                                           | :heavy_check_mark:                                 | ISO timestamp of the event                         |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |