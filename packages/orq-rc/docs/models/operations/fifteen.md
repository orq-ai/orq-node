# Fifteen

## Example Usage

```typescript
import { Fifteen } from "@orq-ai/node/models/operations";

let value: Fifteen = {
  type: "event.workflow_events.tool_execution_failed",
  timestamp: "<value>",
  data: {
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
      product: "remoteconfigs",
    },
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody15Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody15type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `timestamp`                                                                                                                                                                        | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | ISO timestamp of the event                                                                                                                                                         |
| `data`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody15Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody15data.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |