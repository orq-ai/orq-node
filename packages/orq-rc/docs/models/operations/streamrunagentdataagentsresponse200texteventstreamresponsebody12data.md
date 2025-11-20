# StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody12Data

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody12Data } from "@orq-ai/node/models/operations";

let value:
  StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody12Data = {
    workflowRunId: "<id>",
    spanId: "<id>",
    parentId: "<id>",
    message: [
      {
        role: "tool",
        parts: [
          {
            kind: "tool_call",
            toolName: "<value>",
            toolCallId: "<id>",
            arguments: {},
          },
        ],
      },
    ],
  };
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workflowRunId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `spanId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `parentId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `message`                                                          | [operations.DataMessage](../../models/operations/datamessage.md)[] | :heavy_check_mark:                                                 | N/A                                                                |