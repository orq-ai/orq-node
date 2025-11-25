# AgentInactiveStreamingEvent

Emitted when the agent completes processing or pauses for input. Contains the final message, finish reason (stop, tool_calls, max_iterations, etc.), and any pending tool calls awaiting user response.

## Example Usage

```typescript
import { AgentInactiveStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentInactiveStreamingEvent = {
  type: "event.agents.inactive",
  timestamp: "<value>",
  data: {
    lastMessage: "<value>",
    finishReason: "stop",
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.AgentInactiveStreamingEventType](../../models/components/agentinactivestreamingeventtype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `timestamp`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | ISO timestamp of the event                                                                               |
| `data`                                                                                                   | [components.AgentInactiveStreamingEventData](../../models/components/agentinactivestreamingeventdata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |