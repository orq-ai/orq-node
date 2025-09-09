# Parts5

## Example Usage

```typescript
import { Parts5 } from "@orq-ai/node/models/operations";

let value: Parts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                                                                 | [operations.StreamRunAgentPartsAgentsRequestRequestBodyMessageKind](../../models/operations/streamrunagentpartsagentsrequestrequestbodymessagekind.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `toolCallId`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `result`                                                                                                                                               | *any*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `metadata`                                                                                                                                             | Record<string, *any*>                                                                                                                                  | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |