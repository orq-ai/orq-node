# StreamAgentRequestBody

## Example Usage

```typescript
import { StreamAgentRequestBody } from "@orq-ai/node/models/operations";

let value: StreamAgentRequestBody = {
  message: {
    role: "user",
    parts: [],
  },
  contact: {
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
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskId`                                                                                                                                                                                           | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Optional task ID to continue an existing agent execution. When provided, the agent will continue the conversation from the existing task state. The task must be in an inactive state to continue. |
| `message`                                                                                                                                                                                          | [operations.StreamAgentMessage](../../models/operations/streamagentmessage.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `variables`                                                                                                                                                                                        | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | Optional variables for template replacement in system prompt, instructions, and messages                                                                                                           |
| `contact`                                                                                                                                                                                          | [operations.StreamAgentContact](../../models/operations/streamagentcontact.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically.                                                                                 |
| `thread`                                                                                                                                                                                           | [operations.StreamAgentThread](../../models/operations/streamagentthread.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Thread information to group related requests                                                                                                                                                       |
| `memory`                                                                                                                                                                                           | [operations.StreamAgentMemory](../../models/operations/streamagentmemory.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Memory configuration for the agent execution. Used to associate memory stores with specific entities like users or sessions.                                                                       |
| `metadata`                                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | Optional metadata for the agent invocation as key-value pairs that will be included in traces                                                                                                      |
| `streamTimeoutSeconds`                                                                                                                                                                             | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Stream timeout in seconds (1-3600). Default: 1800 (30 minutes)                                                                                                                                     |