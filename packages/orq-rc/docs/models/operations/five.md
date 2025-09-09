# Five

## Example Usage

```typescript
import { Five } from "@orq-ai/node/models/operations";

let value: Five = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                 | [operations.RunAgentPartsAgentsRequestKind](../../models/operations/runagentpartsagentsrequestkind.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `toolCallId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | *any*                                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |