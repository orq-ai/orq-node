# Data7

## Example Usage

```typescript
import { Data7 } from "@orq-ai/node/models/operations";

let value: Data7 = {
  type: "event.agents.action_reviewed",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    agentToolCallId: "<id>",
    review: "approved",
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                     | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody7Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody7type.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `timestamp`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ISO timestamp of the event                                                                                                                                                 |
| `data`                                                                                                                                                                     | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody7Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody7data.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |