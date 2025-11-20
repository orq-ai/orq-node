# StreamAgentData2

## Example Usage

```typescript
import { StreamAgentData2 } from "@orq-ai/node/models/operations";

let value: StreamAgentData2 = {
  type: "event.agents.started",
  timestamp: "<value>",
  data: {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [operations.StreamAgentDataAgentsType](../../models/operations/streamagentdataagentstype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `timestamp`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | ISO timestamp of the event                                                                   |
| `data`                                                                                       | [operations.StreamAgentDataAgentsData](../../models/operations/streamagentdataagentsdata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |