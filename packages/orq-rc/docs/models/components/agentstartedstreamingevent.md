# AgentStartedStreamingEvent

Emitted when the agent begins processing. Contains configuration details including the model, instructions, system prompt, and input message.

## Example Usage

```typescript
import { AgentStartedStreamingEvent } from "@orq-ai/node/models/components";

let value: AgentStartedStreamingEvent = {
  type: "event.agents.started",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
    inputMessage: {
      role: "system",
      parts: [],
    },
    modelId: "<id>",
    instructions: "<value>",
    systemPrompt: "<value>",
    agentManifestId: "<id>",
    agentKey: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.AgentStartedStreamingEventType](../../models/components/agentstartedstreamingeventtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `timestamp`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | ISO timestamp of the event                                                                             |
| `data`                                                                                                 | [components.AgentStartedStreamingEventData](../../models/components/agentstartedstreamingeventdata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |