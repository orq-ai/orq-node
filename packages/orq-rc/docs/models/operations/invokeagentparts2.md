# InvokeAgentParts2

## Example Usage

```typescript
import { InvokeAgentParts2 } from "@orq-ai/node/models/operations";

let value: InvokeAgentParts2 = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `kind`                                                                                         | [operations.InvokeAgentPartsAgentsKind](../../models/operations/invokeagentpartsagentskind.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |