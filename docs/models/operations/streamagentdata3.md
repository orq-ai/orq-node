# StreamAgentData3

## Example Usage

```typescript
import { StreamAgentData3 } from "@orq-ai/node/models/operations";

let value: StreamAgentData3 = {
  type: "event.agents.thought",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    messageDifference: {},
    iteration: 4512.51,
    accumulatedExecutionTime: 7936.34,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.StreamAgentDataAgentsResponseType](../../models/operations/streamagentdataagentsresponsetype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `timestamp`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ISO timestamp of the event                                                                                   |
| `data`                                                                                                       | [operations.StreamAgentDataAgentsResponseData](../../models/operations/streamagentdataagentsresponsedata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |