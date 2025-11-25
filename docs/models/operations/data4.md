# Data4

## Example Usage

```typescript
import { Data4 } from "@orq-ai/node/models/operations";

let value: Data4 = {
  type: "event.agents.inactive",
  timestamp: "<value>",
  data: {
    lastMessage: "<value>",
    finishReason: "tool_calls",
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.StreamRunAgentDataAgentsResponse200Type](../../models/operations/streamrunagentdataagentsresponse200type.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `timestamp`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ISO timestamp of the event                                                                                               |
| `data`                                                                                                                   | [operations.StreamRunAgentDataAgentsResponseData](../../models/operations/streamrunagentdataagentsresponsedata.md)       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |