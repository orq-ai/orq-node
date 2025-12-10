# AgentResponseMessage

Response message from an agent execution.

## Example Usage

```typescript
import { AgentResponseMessage } from "@orq-ai/node/models/components";

let value: AgentResponseMessage = {
  messageId: "<id>",
  role: "agent",
  parts: [
    {
      kind: "text",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `messageId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_check_mark:                                 | N/A                                                |
| `parts`                                            | *components.Parts*[]                               | :heavy_check_mark:                                 | N/A                                                |
| `metadata`                                         | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |