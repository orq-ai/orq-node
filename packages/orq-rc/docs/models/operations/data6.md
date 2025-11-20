# Data6

## Example Usage

```typescript
import { Data6 } from "@orq-ai/node/models/operations";

let value: Data6 = {
  type: "event.agents.action_review_requested",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    requiresApproval: false,
    tool: {
      id: "<id>",
      actionType: "<value>",
    },
    input: {
      "key": "<value>",
    },
    agentToolCallId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBodyType](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `timestamp`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | ISO timestamp of the event                                                                                                                                               |
| `data`                                                                                                                                                                   | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBodyData](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebodydata.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |