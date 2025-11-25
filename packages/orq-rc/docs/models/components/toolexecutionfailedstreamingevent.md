# ToolExecutionFailedStreamingEvent

Emitted when a tool execution fails. Contains the error details, action type, and execution context.

## Example Usage

```typescript
import { ToolExecutionFailedStreamingEvent } from "@orq-ai/node/models/components";

let value: ToolExecutionFailedStreamingEvent = {
  type: "event.workflow_events.tool_execution_failed",
  timestamp: "<value>",
  data: {
    error: {
      message: "<value>",
    },
    actionType: "<value>",
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "agents",
    },
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.ToolExecutionFailedStreamingEventType](../../models/components/toolexecutionfailedstreamingeventtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `timestamp`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ISO timestamp of the event                                                                                           |
| `data`                                                                                                               | [components.ToolExecutionFailedStreamingEventData](../../models/components/toolexecutionfailedstreamingeventdata.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |