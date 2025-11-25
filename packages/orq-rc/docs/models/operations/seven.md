# Seven

## Example Usage

```typescript
import { Seven } from "@orq-ai/node/models/operations";

let value: Seven = {
  type: "event.agents.action_reviewed",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    agentToolCallId: "<id>",
    review: "rejected",
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody7Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody7type.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `timestamp`                                                                                                                                                                      | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | ISO timestamp of the event                                                                                                                                                       |
| `data`                                                                                                                                                                           | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBodyData](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebodydata.md)   | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |