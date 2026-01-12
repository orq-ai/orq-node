# CreateConversationResponseResponseBody

Response successfully created.

## Example Usage

```typescript
import { CreateConversationResponseResponseBody } from "@orq-ai/node/models/operations";

let value: CreateConversationResponseResponseBody = {
  data: {
    type: "tool.started",
    timestamp: "<value>",
    data: {
      toolId: "<id>",
      toolCallId: "<id>",
      arguments: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `data`                              | *operations.ResponseStreamingEvent* | :heavy_minus_sign:                  | N/A                                 |