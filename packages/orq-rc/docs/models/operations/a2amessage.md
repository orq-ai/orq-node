# A2AMessage

The A2A message to send to the agent (user input or tool results)

## Example Usage

```typescript
import { A2AMessage } from "@orq-ai/node/models/operations";

let value: A2AMessage = {
  role: "user",
  parts: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.CreateAgentResponseRole*                  | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.PublicMessagePart*[]                      | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |