# CreateAgentResponseRequestResponseBody

Agent response successfully created and completed. Returns the full conversation including all messages, tool interactions, model used, and token usage statistics. In background mode, returns immediately with initial task details.

## Example Usage

```typescript
import { CreateAgentResponseRequestResponseBody } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseRequestResponseBody = {
  id: "<id>",
  taskId: "<id>",
  output: [
    {
      messageId: "<id>",
      role: "system",
      parts: [],
    },
  ],
  createdAt: "1723593465246",
  model: "Colorado",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique response ID                                                                                   |
| `taskId`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The agent execution task ID                                                                              |
| `output`                                                                                                 | [operations.Output](../../models/operations/output.md)[]                                                 | :heavy_check_mark:                                                                                       | Array of messages from the agent execution                                                               |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | ISO timestamp of response creation                                                                       |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Model used in provider/model format                                                                      |
| `usage`                                                                                                  | [operations.CreateAgentResponseRequestUsage](../../models/operations/createagentresponserequestusage.md) | :heavy_minus_sign:                                                                                       | Token usage from the agent execution                                                                     |