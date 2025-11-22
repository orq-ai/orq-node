# StreamRunAgentData6

## Example Usage

```typescript
import { StreamRunAgentData6 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentData6 = {
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
    input: {},
    agentToolCallId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBodyType](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `timestamp`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ISO timestamp of the event                                                                                                                                                     |
| `data`                                                                                                                                                                         | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamData](../../models/operations/streamrunagentdataagentsresponse200texteventstreamdata.md)                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |