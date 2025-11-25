# StreamAgentDataAgentsResponse200TextEventStreamResponseBody12Data

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200TextEventStreamResponseBody12Data } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200TextEventStreamResponseBody12Data = {
  workflowRunId: "<id>",
  spanId: "<id>",
  parentId: "<id>",
  message: [
    {
      role: "tool",
      parts: [
        {
          kind: "data",
          data: {},
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `workflowRunId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `spanId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `parentId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `message`                                                                                | [operations.StreamAgentDataMessage](../../models/operations/streamagentdatamessage.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |