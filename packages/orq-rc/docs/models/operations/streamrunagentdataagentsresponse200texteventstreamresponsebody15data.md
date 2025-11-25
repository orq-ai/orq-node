# StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody15Data

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody15Data } from "@orq-ai/node/models/operations";

let value:
  StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody15Data = {
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
  };
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                | [operations.ErrorT](../../models/operations/errort.md)                                                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `actionType`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `toolExecutionContext`                                                                                                 | [operations.StreamRunAgentDataToolExecutionContext](../../models/operations/streamrunagentdatatoolexecutioncontext.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `responseId`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `workflowRunId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |