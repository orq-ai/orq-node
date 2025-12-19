# ToolExecutionStartedStreamingEventData

## Example Usage

```typescript
import { ToolExecutionStartedStreamingEventData } from "@orq-ai/node/models/components";

let value: ToolExecutionStartedStreamingEventData = {
  toolId: "<id>",
  actionType: "<value>",
  toolArguments: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  toolExecutionContext: {
    actionId: "<id>",
    agentToolCallId: "<id>",
    workspaceId: "<id>",
    agentManifestId: "<id>",
    agentExecutionId: "<id>",
    product: "generic",
  },
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `toolId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `toolKey`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `toolDisplayName`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `actionType`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `toolArguments`                                                                    | Record<string, *any*>                                                              | :heavy_check_mark:                                                                 | N/A                                                                                |
| `toolExecutionContext`                                                             | [components.ToolExecutionContext](../../models/components/toolexecutioncontext.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `responseId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `workflowRunId`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |