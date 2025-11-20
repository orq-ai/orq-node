# StreamAgentA2AMessage

The A2A message to send to the agent (user input or tool results)

## Example Usage

```typescript
import { StreamAgentA2AMessage } from "@orq-ai/node/models/operations";

let value: StreamAgentA2AMessage = {
  role: "tool",
  parts: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.StreamAgentRole*                          | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.StreamAgentPublicMessagePart*[]           | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |