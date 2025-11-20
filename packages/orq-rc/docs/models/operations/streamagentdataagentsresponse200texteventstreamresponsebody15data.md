# StreamAgentDataAgentsResponse200TextEventStreamResponseBody15Data

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200TextEventStreamResponseBody15Data } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200TextEventStreamResponseBody15Data = {
  error: {
    message: "<value>",
  },
  actionType: "<value>",
  toolExecutionContext: {
    actionId: "<id>",
    agentToolCallId: "<id>",
    workspaceId: "<id>",
    agentManifestId: "<id>",
    agentExecutionId: "<id>",
    product: "generic",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                      | [operations.DataError](../../models/operations/dataerror.md)                                                                                 | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `actionType`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `toolExecutionContext`                                                                                                                       | [operations.StreamAgentDataAgentsResponseToolExecutionContext](../../models/operations/streamagentdataagentsresponsetoolexecutioncontext.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |