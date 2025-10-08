# StreamRunAgentMessage

The A2A format message containing the task for the agent to perform.

## Example Usage

```typescript
import { StreamRunAgentMessage } from "@orq-ai/node/models/operations";

let value: StreamRunAgentMessage = {
  role: "tool",
  parts: [
    {
      kind: "file",
      file: {
        uri: "https://calculating-offset.net",
      },
    },
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `messageId`                                           | *string*                                              | :heavy_minus_sign:                                    | Optional A2A message ID in ULID format                |
| `role`                                                | *operations.StreamRunAgentRole*                       | :heavy_check_mark:                                    | Message role (user or tool for continuing executions) |
| `parts`                                               | *operations.StreamRunAgentPublicMessagePart*[]        | :heavy_check_mark:                                    | A2A message parts (text, file, or tool_result only)   |