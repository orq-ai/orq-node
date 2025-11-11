# InvokeAgentParts5

## Example Usage

```typescript
import { InvokeAgentParts5 } from "@orq-ai/node/models/operations";

let value: InvokeAgentParts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                             | [operations.InvokeAgentPartsAgentsResponse200ApplicationJSONKind](../../models/operations/invokeagentpartsagentsresponse200applicationjsonkind.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `toolCallId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `result`                                                                                                                                           | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `metadata`                                                                                                                                         | Record<string, *any*>                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |