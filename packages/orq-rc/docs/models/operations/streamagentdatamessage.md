# StreamAgentDataMessage

## Example Usage

```typescript
import { StreamAgentDataMessage } from "@orq-ai/node/models/operations";

let value: StreamAgentDataMessage = {
  role: "tool",
  parts: [
    {
      kind: "data",
      data: {
        "key": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `role`                                                                                                             | [operations.StreamAgentDataAgentsResponse200Role](../../models/operations/streamagentdataagentsresponse200role.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `parts`                                                                                                            | *operations.StreamAgentDataAgentsResponse200Parts*[]                                                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | Record<string, *any*>                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |