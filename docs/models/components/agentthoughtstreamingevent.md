# AgentThoughtStreamingEvent

Emitted during agent reasoning. Contains the incremental message changes, model choices, iteration count, and token usage for this processing step.

## Example Usage

```typescript
import { AgentThoughtStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentThoughtStreamingEvent = {
  type: "event.agents.thought",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    messageDifference: {},
    iteration: 8683.49,
    accumulatedExecutionTime: 1876.58,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.AgentThoughtStreamingEventType](../../models/components/agentthoughtstreamingeventtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `timestamp`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | ISO timestamp of the event                                                                             |
| `data`                                                                                                 | [components.AgentThoughtStreamingEventData](../../models/components/agentthoughtstreamingeventdata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |