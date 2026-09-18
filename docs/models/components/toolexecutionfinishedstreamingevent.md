# ToolExecutionFinishedStreamingEvent

Emitted when a tool completes execution successfully. Contains the result data, action type, and execution context.

## Example Usage

```typescript
import { ToolExecutionFinishedStreamingEvent } from "@orq-ai/node/models/components";

let value: ToolExecutionFinishedStreamingEvent = {
  type: "event.workflow_events.tool_execution_finished",
  timestamp: "<value>",
  data: {
    actionType: "<value>",
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "experiments",
    },
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"event.workflow_events.tool_execution_finished"*                                                                        | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `timestamp`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ISO timestamp of the event                                                                                               |
| `data`                                                                                                                   | [components.ToolExecutionFinishedStreamingEventData](../../models/components/toolexecutionfinishedstreamingeventdata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |