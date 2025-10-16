# RunAgentAgentsMessage

Optional status message

## Example Usage

```typescript
import { RunAgentAgentsMessage } from "@orq-ai/node/models/operations";

let value: RunAgentAgentsMessage = {
  kind: "message",
  messageId: "<id>",
  role: "system",
  parts: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kind`                                                                         | [operations.RunAgentAgentsKind](../../models/operations/runagentagentskind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `messageId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `role`                                                                         | [operations.RunAgentAgentsRole](../../models/operations/runagentagentsrole.md) | :heavy_check_mark:                                                             | Extended A2A message role                                                      |
| `parts`                                                                        | *any*[]                                                                        | :heavy_check_mark:                                                             | N/A                                                                            |