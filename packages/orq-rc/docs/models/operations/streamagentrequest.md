# StreamAgentRequest

## Example Usage

```typescript
import { StreamAgentRequest } from "@orq-ai/node/models/operations";

let value: StreamAgentRequest = {
  key: "<key>",
  requestBody: {
    message: {
      role: "user",
      parts: [],
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The key or ID of the agent to invoke                                                   |
| `requestBody`                                                                          | [operations.StreamAgentRequestBody](../../models/operations/streamagentrequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |