# ToolExecutionFailedStreamingEventData

## Example Usage

```typescript
import { ToolExecutionFailedStreamingEventData } from "@orq-ai/node/models/components";

let value: ToolExecutionFailedStreamingEventData = {
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
    product: "agents",
  },
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                              | [components.ErrorT](../../models/components/errort.md)                                                                                               | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `actionType`                                                                                                                                         | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `toolExecutionContext`                                                                                                                               | [components.ToolExecutionFailedStreamingEventToolExecutionContext](../../models/components/toolexecutionfailedstreamingeventtoolexecutioncontext.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `responseId`                                                                                                                                         | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `workflowRunId`                                                                                                                                      | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `stream`                                                                                                                                             | *boolean*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |