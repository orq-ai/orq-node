# Message

## Example Usage

```typescript
import { Message } from "@orq-ai/node/models/operations";

let value: Message = {
  role: "tool",
  parts: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.InvokeAgentRole*                          | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.PublicMessagePart*[]                      | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |