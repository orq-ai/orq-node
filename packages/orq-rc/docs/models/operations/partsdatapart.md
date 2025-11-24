# PartsDataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { PartsDataPart } from "@orq-ai/node/models/operations";

let value: PartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                                                                                   | [operations.RunAgentPartsAgentsKind](../../models/operations/runagentpartsagentskind.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | Record<string, *any*>                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |