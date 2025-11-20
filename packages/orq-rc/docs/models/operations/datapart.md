# DataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { DataPart } from "@orq-ai/node/models/operations";

let value: DataPart = {
  kind: "data",
  data: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `kind`                                                                               | [operations.GetAgentTaskPartsKind](../../models/operations/getagenttaskpartskind.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | Record<string, *any*>                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |