# StreamAgentData4

## Example Usage

```typescript
import { StreamAgentData4 } from "@orq-ai/node/models/operations";

let value: StreamAgentData4 = {
  type: "event.agents.inactive",
  timestamp: "<value>",
  data: {
    lastMessage: "<value>",
    finishReason: "content_filter",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.StreamAgentDataAgentsResponse200Type](../../models/operations/streamagentdataagentsresponse200type.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `timestamp`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | ISO timestamp of the event                                                                                         |
| `data`                                                                                                             | [operations.StreamAgentDataAgentsResponse200Data](../../models/operations/streamagentdataagentsresponse200data.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |