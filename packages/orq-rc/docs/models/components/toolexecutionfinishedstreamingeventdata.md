# ToolExecutionFinishedStreamingEventData

## Example Usage

```typescript
import { ToolExecutionFinishedStreamingEventData } from "@orq-ai/node/models/components";

let value: ToolExecutionFinishedStreamingEventData = {
  actionType: "<value>",
  toolExecutionContext: {
    actionId: "<id>",
    agentToolCallId: "<id>",
    workspaceId: "<id>",
    agentManifestId: "<id>",
    agentExecutionId: "<id>",
    product: "experiments",
  },
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                                                 | *any*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `actionType`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `toolExecutionContext`                                                                                                                                   | [components.ToolExecutionFinishedStreamingEventToolExecutionContext](../../models/components/toolexecutionfinishedstreamingeventtoolexecutioncontext.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `responseId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `workflowRunId`                                                                                                                                          | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `stream`                                                                                                                                                 | *boolean*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |