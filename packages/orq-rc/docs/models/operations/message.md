# Message

The A2A format message containing the task for the agent to perform.

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
| `role`                                                | *operations.RunAgentRole*                             | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.Parts*[]                                  | :heavy_check_mark:                                    | A2A message parts                                     |
| `metadata`                                            | Record<string, *any*>                                 | :heavy_minus_sign:                                    | Optional message metadata                             |