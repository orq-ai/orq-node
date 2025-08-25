# Output1

An assistant message output

## Example Usage

```typescript
import { Output1 } from "@orq-ai/node/models/operations";

let value: Output1 = {
  id: "<id>",
  type: "message",
  role: "assistant",
  status: "in_progress",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The unique identifier for this message                             |
| `type`                                                             | [operations.OutputType](../../models/operations/outputtype.md)     | :heavy_check_mark:                                                 | The type of output item                                            |
| `role`                                                             | [operations.OutputRole](../../models/operations/outputrole.md)     | :heavy_check_mark:                                                 | The role of the message author                                     |
| `status`                                                           | [operations.OutputStatus](../../models/operations/outputstatus.md) | :heavy_check_mark:                                                 | The status of the message                                          |
| `content`                                                          | *operations.OutputContent*[]                                       | :heavy_minus_sign:                                                 | The content parts of the message                                   |