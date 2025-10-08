# StreamAgentMessage

## Example Usage

```typescript
import { StreamAgentMessage } from "@orq-ai/node/models/operations";

let value: StreamAgentMessage = {
  role: "user",
  parts: [],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.StreamAgentRole*                          | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.StreamAgentPublicMessagePart*[]           | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |