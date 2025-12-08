# InvokeAgentRequestBody

## Example Usage

```typescript
import { InvokeAgentRequestBody } from "@orq-ai/node/models/operations";

let value: InvokeAgentRequestBody = {
  message: {
    role: "user",
    parts: [
      {
        kind: "tool_result",
        toolCallId: "<id>",
      },
    ],
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
| `message`                                                                                                                                                                                          | [operations.InvokeAgentA2AMessage](../../models/operations/invokeagenta2amessage.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                                                 | The A2A message to send to the agent (user input or tool results)                                                                                                                                  |
| `variables`                                                                                                                                                                                        | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | Optional variables for template replacement in system prompt, instructions, and messages                                                                                                           |
| `contact`                                                                                                                                                                                          | [operations.InvokeAgentContact](../../models/operations/invokeagentcontact.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically.                                                                                 |
| `thread`                                                                                                                                                                                           | [operations.InvokeAgentThread](../../models/operations/invokeagentthread.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Thread information to group related requests                                                                                                                                                       |
| `memory`                                                                                                                                                                                           | [operations.InvokeAgentMemory](../../models/operations/invokeagentmemory.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                 | Memory configuration for the agent execution. Used to associate memory stores with specific entities like users or sessions.                                                                       |
| `metadata`                                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | Optional metadata for the agent invocation as key-value pairs that will be included in traces                                                                                                      |