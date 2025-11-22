# Twelve

## Example Usage

```typescript
import { Twelve } from "@orq-ai/node/models/operations";

let value: Twelve = {
  type: "event.agents.message-created",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
    spanId: "<id>",
    parentId: "<id>",
    message: [],
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody12Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody12type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `timestamp`                                                                                                                                                                        | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | ISO timestamp of the event                                                                                                                                                         |
| `data`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody12Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody12data.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |