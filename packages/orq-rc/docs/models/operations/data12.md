# Data12

## Example Usage

```typescript
import { Data12 } from "@orq-ai/node/models/operations";

let value: Data12 = {
  type: "event.agents.message-created",
  timestamp: "<value>",
  data: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody12Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody12type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | ISO timestamp of the event                                                                                                                                                   |
| `data`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody12Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody12data.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |