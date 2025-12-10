# CreateAgentResponseRequestRequestBody

## Example Usage

```typescript
import { CreateAgentResponseRequestRequestBody } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseRequestRequestBody = {
  message: {
    role: "tool",
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
| `message`                                                                                                                                                                                          | [operations.A2AMessage](../../models/operations/a2amessage.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                 | The A2A message to send to the agent (user input or tool results)                                                                                                                                  |
| `variables`                                                                                                                                                                                        | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | Optional variables for template replacement in system prompt, instructions, and messages                                                                                                           |
| `contact`                                                                                                                                                                                          | [operations.Contact](../../models/operations/contact.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically.                                                                                 |
| `thread`                                                                                                                                                                                           | [operations.CreateAgentResponseRequestThread](../../models/operations/createagentresponserequestthread.md)                                                                                         | :heavy_minus_sign:                                                                                                                                                                                 | Thread information to group related requests                                                                                                                                                       |
| `memory`                                                                                                                                                                                           | [operations.Memory](../../models/operations/memory.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                 | Memory configuration for the agent execution. Used to associate memory stores with specific entities like users or sessions.                                                                       |
| `metadata`                                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | Optional metadata for the agent invocation as key-value pairs that will be included in traces                                                                                                      |
| `background`                                                                                                                                                                                       | *boolean*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                 | If true, returns immediately without waiting for completion. If false (default), waits until the agent becomes inactive or errors.                                                                 |
| `stream`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                 | If true, returns Server-Sent Events (SSE) streaming response with real-time events. If false (default), returns standard JSON response.                                                            |
| `conversation`                                                                                                                                                                                     | [operations.Conversation](../../models/operations/conversation.md)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |