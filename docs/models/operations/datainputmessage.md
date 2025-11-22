# DataInputMessage

## Example Usage

```typescript
import { DataInputMessage } from "@orq-ai/node/models/operations";

let value: DataInputMessage = {
  role: "user",
  parts: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `messageId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `role`                                                                           | [operations.StreamAgentDataRole](../../models/operations/streamagentdatarole.md) | :heavy_check_mark:                                                               | Extended A2A message role                                                        |
| `parts`                                                                          | *operations.StreamAgentDataParts*[]                                              | :heavy_check_mark:                                                               | N/A                                                                              |
| `metadata`                                                                       | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |