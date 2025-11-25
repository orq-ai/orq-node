# AgentErroredStreamingEvent

Emitted when an error occurs during agent execution. Contains the error message and HTTP status code indicating the failure type.

## Example Usage

```typescript
import { AgentErroredStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentErroredStreamingEvent = {
  type: "event.agents.errored",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 8483.2,
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.AgentErroredStreamingEventType](../../models/components/agenterroredstreamingeventtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `timestamp`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | ISO timestamp of the event                                                                             |
| `data`                                                                                                 | [components.AgentErroredStreamingEventData](../../models/components/agenterroredstreamingeventdata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |