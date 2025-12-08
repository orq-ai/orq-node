# AgentMessageCreatedStreamingEvent

Emitted when a new message is added to the conversation. Contains the message content, workflow run ID, and span context for tracing.

## Example Usage

```typescript
import { AgentMessageCreatedStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentMessageCreatedStreamingEvent = {
  type: "event.agents.message-created",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
    spanId: "<id>",
    parentId: "<id>",
    message: [],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | *"event.agents.message-created"*                                                                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `timestamp`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ISO timestamp of the event                                                                                           |
| `data`                                                                                                               | [components.AgentMessageCreatedStreamingEventData](../../models/components/agentmessagecreatedstreamingeventdata.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |