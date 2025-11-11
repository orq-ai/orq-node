# InvokeAgentMessage

Optional status message

## Example Usage

```typescript
import { InvokeAgentMessage } from "@orq-ai/node/models/operations";

let value: InvokeAgentMessage = {
  kind: "message",
  messageId: "<id>",
  role: "user",
  parts: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `kind`                                                                               | [operations.InvokeAgentAgentsKind](../../models/operations/invokeagentagentskind.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `messageId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `role`                                                                               | [operations.InvokeAgentAgentsRole](../../models/operations/invokeagentagentsrole.md) | :heavy_check_mark:                                                                   | Extended A2A message role                                                            |
| `parts`                                                                              | *operations.InvokeAgentParts*[]                                                      | :heavy_check_mark:                                                                   | N/A                                                                                  |