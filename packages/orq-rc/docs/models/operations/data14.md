# Data14

## Example Usage

```typescript
import { Data14 } from "@orq-ai/node/models/operations";

let value: Data14 = {
  type: "event.workflow_events.tool_execution_finished",
  timestamp: "<value>",
  data: {
    actionType: "<value>",
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "otel",
    },
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody14Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody14type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | ISO timestamp of the event                                                                                                                                                   |
| `data`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody14Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody14data.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |