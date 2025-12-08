# ExecutionNamedStreamingEvent

Emitted when the agent execution is assigned a human-readable name, typically generated based on the conversation content.

## Example Usage

```typescript
import { ExecutionNamedStreamingEvent } from "@orq-ai/node/models/components";

let value: ExecutionNamedStreamingEvent = {
  type: "event.agents.execution_named",
  timestamp: "<value>",
  data: {
    name: "<value>",
    agentManifestId: "<id>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"event.agents.execution_named"*                                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `timestamp`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | ISO timestamp of the event                                                                                 |
| `data`                                                                                                     | [components.ExecutionNamedStreamingEventData](../../models/components/executionnamedstreamingeventdata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |