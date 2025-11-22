# StreamRunAgentPartsAgentsResponseDataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { StreamRunAgentPartsAgentsResponseDataPart } from "@orq-ai/node/models/operations";

let value: StreamRunAgentPartsAgentsResponseDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                                             | [operations.StreamRunAgentPartsAgentsResponse200TextEventStreamResponseBodyData4DataKind](../../models/operations/streamrunagentpartsagentsresponse200texteventstreamresponsebodydata4datakind.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `data`                                                                                                                                                                                             | Record<string, *any*>                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `metadata`                                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |