# Fourteen

## Example Usage

```typescript
import { Fourteen } from "@orq-ai/node/models/operations";

let value: Fourteen = {
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
      product: "spreadsheet_run",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody14Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody14type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `timestamp`                                                                                                                                                                        | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | ISO timestamp of the event                                                                                                                                                         |
| `data`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody14Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody14data.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |