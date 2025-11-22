# Data3

## Example Usage

```typescript
import { Data3 } from "@orq-ai/node/models/operations";

let value: Data3 = {
  type: "event.agents.thought",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    messageDifference: {},
    iteration: 7554.34,
    accumulatedExecutionTime: 6180.18,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.StreamRunAgentDataAgentsResponseType](../../models/operations/streamrunagentdataagentsresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `timestamp`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ISO timestamp of the event                                                                                         |
| `data`                                                                                                             | [operations.StreamRunAgentDataAgentsData](../../models/operations/streamrunagentdataagentsdata.md)                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |