# StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody13Data

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody13Data } from "@orq-ai/node/models/operations";

let value:
  StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody13Data = {
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
      product: "deployments",
    },
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
| `toolExecutionContext`                                                             | [operations.ToolExecutionContext](../../models/operations/toolexecutioncontext.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `responseId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |