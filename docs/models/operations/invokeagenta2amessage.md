# InvokeAgentA2AMessage

The A2A message to send to the agent (user input or tool results)

## Example Usage

```typescript
import { InvokeAgentA2AMessage } from "@orq-ai/node/models/operations";

let value: InvokeAgentA2AMessage = {
  role: "user",
  parts: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.InvokeAgentRole*                          | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.InvokeAgentPublicMessagePart*[]           | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |