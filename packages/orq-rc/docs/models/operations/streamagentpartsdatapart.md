# StreamAgentPartsDataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { StreamAgentPartsDataPart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `kind`                                                                                         | [operations.StreamAgentPartsAgentsKind](../../models/operations/streamagentpartsagentskind.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |