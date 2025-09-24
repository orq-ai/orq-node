# StreamRunAgentParts2

## Example Usage

```typescript
import { StreamRunAgentParts2 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentParts2 = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kind`                                                                                               | [operations.StreamRunAgentPartsAgentsKind](../../models/operations/streamrunagentpartsagentskind.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | Record<string, *any*>                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |