# LastMessageFull

Full last message in A2A format (for backwards compatibility)

## Example Usage

```typescript
import { LastMessageFull } from "@orq-ai/node/models/components";

let value: LastMessageFull = {
  role: "system",
  parts: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `messageId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `role`                                                                                                   | [components.AgentInactiveStreamingEventRole](../../models/components/agentinactivestreamingeventrole.md) | :heavy_check_mark:                                                                                       | Extended A2A message role                                                                                |
| `parts`                                                                                                  | *components.AgentInactiveStreamingEventParts*[]                                                          | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `metadata`                                                                                               | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |