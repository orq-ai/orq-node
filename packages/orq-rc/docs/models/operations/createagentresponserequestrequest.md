# CreateAgentResponseRequestRequest

## Example Usage

```typescript
import { CreateAgentResponseRequestRequest } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseRequestRequest = {
  agentKey: "<value>",
  requestBody: {
    message: {
      role: "tool",
      parts: [
        {
          kind: "error",
          error: "<value>",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `agentKey`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The unique key of identifier of the agent to invoke                                                                  |
| `requestBody`                                                                                                        | [operations.CreateAgentResponseRequestRequestBody](../../models/operations/createagentresponserequestrequestbody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |