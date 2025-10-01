# RunAgentMessage

Optional status message

## Example Usage

```typescript
import { RunAgentMessage } from "@orq-ai/node/models/operations";

let value: RunAgentMessage = {
  kind: "message",
  messageId: "<id>",
  role: "agent",
  parts: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kind`                                                                         | [operations.RunAgentAgentsKind](../../models/operations/runagentagentskind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `messageId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `role`                                                                         | [operations.RunAgentAgentsRole](../../models/operations/runagentagentsrole.md) | :heavy_check_mark:                                                             | Extended A2A message role                                                      |
| `parts`                                                                        | *any*[]                                                                        | :heavy_check_mark:                                                             | N/A                                                                            |