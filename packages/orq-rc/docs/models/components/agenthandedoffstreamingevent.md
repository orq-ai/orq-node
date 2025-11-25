# AgentHandedOffStreamingEvent

Emitted when control is transferred to a sub-agent. Contains the target agent ID and the input message for the handoff.

## Example Usage

```typescript
import { AgentHandedOffStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentHandedOffStreamingEvent = {
  type: "event.agents.handed_off",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    input: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.AgentHandedOffStreamingEventType](../../models/components/agenthandedoffstreamingeventtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `timestamp`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | ISO timestamp of the event                                                                                 |
| `data`                                                                                                     | [components.AgentHandedOffStreamingEventData](../../models/components/agenthandedoffstreamingeventdata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |