# RunAgentA2AMessage

The A2A format message containing the task for the agent to perform.

## Example Usage

```typescript
import { RunAgentA2AMessage } from "@orq-ai/node/models/operations";

let value: RunAgentA2AMessage = {
  role: "user",
  parts: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.RunAgentRole*                             | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.RunAgentPublicMessagePart*[]              | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |