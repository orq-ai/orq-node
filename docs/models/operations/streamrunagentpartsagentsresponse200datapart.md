# StreamRunAgentPartsAgentsResponse200DataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { StreamRunAgentPartsAgentsResponse200DataPart } from "@orq-ai/node/models/operations";

let value: StreamRunAgentPartsAgentsResponse200DataPart = {
  kind: "data",
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                                               | [operations.StreamRunAgentPartsAgentsResponse200TextEventStreamResponseBodyData12DataKind](../../models/operations/streamrunagentpartsagentsresponse200texteventstreamresponsebodydata12datakind.md) | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `data`                                                                                                                                                                                               | Record<string, *any*>                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                                           | Record<string, *any*>                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |