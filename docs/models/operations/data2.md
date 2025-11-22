# Data2

## Example Usage

```typescript
import { Data2 } from "@orq-ai/node/models/operations";

let value: Data2 = {
  type: "event.agents.started",
  timestamp: "<value>",
  data: {
    inputMessage: {
      role: "agent",
      parts: [
        {
          kind: "tool_result",
          toolCallId: "<id>",
        },
      ],
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.StreamRunAgentDataAgentsType](../../models/operations/streamrunagentdataagentstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `timestamp`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | ISO timestamp of the event                                                                         |
| `data`                                                                                             | [operations.StreamRunAgentDataData](../../models/operations/streamrunagentdatadata.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |