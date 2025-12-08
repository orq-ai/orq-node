# ToolExecutionStartedStreamingEvent

Emitted when a tool begins execution. Contains the tool ID, name, action type, input arguments, and execution context.

## Example Usage

```typescript
import { ToolExecutionStartedStreamingEvent } from "@orq-ai/node/models/components";

let value: ToolExecutionStartedStreamingEvent = {
  type: "event.workflow_events.tool_execution_started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    actionType: "<value>",
    toolArguments: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "generic",
    },
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | *"event.workflow_events.tool_execution_started"*                                                                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `timestamp`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ISO timestamp of the event                                                                                             |
| `data`                                                                                                                 | [components.ToolExecutionStartedStreamingEventData](../../models/components/toolexecutionstartedstreamingeventdata.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |