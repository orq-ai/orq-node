# Message

## Example Usage

```typescript
import { Message } from "@orq-ai/node/models/components";

let value: Message = {
  role: "tool",
  parts: [],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `messageId`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `role`                                                                                                               | [components.AgentMessageCreatedStreamingEventRole](../../models/components/agentmessagecreatedstreamingeventrole.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `parts`                                                                                                              | *components.AgentMessageCreatedStreamingEventParts*[]                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `metadata`                                                                                                           | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |