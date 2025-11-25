# StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody14Data

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody14Data } from "@orq-ai/node/models/operations";

let value:
  StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody14Data = {
    actionType: "<value>",
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "spreadsheet_run",
    },
    workflowRunId: "<id>",
  };
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | *any*                                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `actionType`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `toolExecutionContext`                                                                     | [operations.DataToolExecutionContext](../../models/operations/datatoolexecutioncontext.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `responseId`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `workflowRunId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |