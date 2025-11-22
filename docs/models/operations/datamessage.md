# DataMessage

## Example Usage

```typescript
import { DataMessage } from "@orq-ai/node/models/operations";

let value: DataMessage = {
  role: "user",
  parts: [
    {
      kind: "file",
      file: {
        bytes: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `role`                                                                                                             | [operations.StreamRunAgentDataAgentsResponseRole](../../models/operations/streamrunagentdataagentsresponserole.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `parts`                                                                                                            | *operations.StreamRunAgentDataAgentsResponseParts*[]                                                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |