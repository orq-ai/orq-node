# StreamAgentDataAgentsResponse200TextEventStreamResponseBody13Data

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200TextEventStreamResponseBody13Data } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200TextEventStreamResponseBody13Data = {
  toolId: "<id>",
  actionType: "<value>",
  toolArguments: {},
  toolExecutionContext: {
    actionId: "<id>",
    agentToolCallId: "<id>",
    workspaceId: "<id>",
    agentManifestId: "<id>",
    agentExecutionId: "<id>",
    product: "external_events",
  },
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `toolId`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `toolKey`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `toolDisplayName`                                                                                                | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `actionType`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `toolArguments`                                                                                                  | Record<string, *any*>                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `toolExecutionContext`                                                                                           | [operations.StreamAgentDataToolExecutionContext](../../models/operations/streamagentdatatoolexecutioncontext.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `responseId`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `workflowRunId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |