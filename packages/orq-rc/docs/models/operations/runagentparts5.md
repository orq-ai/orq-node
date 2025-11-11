# RunAgentParts5

## Example Usage

```typescript
import { RunAgentParts5 } from "@orq-ai/node/models/operations";

let value: RunAgentParts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                       | [operations.RunAgentPartsAgentsResponse200ApplicationJSONKind](../../models/operations/runagentpartsagentsresponse200applicationjsonkind.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `toolCallId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `result`                                                                                                                                     | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `metadata`                                                                                                                                   | Record<string, *any*>                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |