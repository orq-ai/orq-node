# Data13

## Example Usage

```typescript
import { Data13 } from "@orq-ai/node/models/operations";

let value: Data13 = {
  type: "event.workflow_events.tool_execution_started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    actionType: "<value>",
    toolArguments: {
      "key": "<value>",
      "key1": "<value>",
    },
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "external_events",
    },
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody13Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody13type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | ISO timestamp of the event                                                                                                                                                   |
| `data`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody13Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody13data.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |