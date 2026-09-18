# StreamAgentRequest

## Example Usage

```typescript
import { StreamAgentRequest } from "@orq-ai/node/models/operations";

let value: StreamAgentRequest = {
  key: "<key>",
  requestBody: {
    message: {
      role: "tool",
      parts: [
        {
          kind: "file",
          file: {
            uri: "https://ignorant-hawk.com",
          },
        },
      ],
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    thread: {
      id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      tags: [
        "customer-support",
        "priority-high",
      ],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `key`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | The key or ID of the agent to invoke                                                             |
| `requestBody`                                                                                    | [operations.StreamAgentA2AInvokeRequest](../../models/operations/streamagenta2ainvokerequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |