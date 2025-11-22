# StreamAgentPartsAgentsDataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { StreamAgentPartsAgentsDataPart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsAgentsDataPart = {
  kind: "data",
  data: {},
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                             | [operations.StreamAgentPartsAgentsResponse200TextEventStreamResponseBodyDataKind](../../models/operations/streamagentpartsagentsresponse200texteventstreamresponsebodydatakind.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `data`                                                                                                                                                                             | Record<string, *any*>                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `metadata`                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                 | N/A                                                                                                                                                                                |