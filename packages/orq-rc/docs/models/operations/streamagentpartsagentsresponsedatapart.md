# StreamAgentPartsAgentsResponseDataPart

A structured data part containing JSON-serializable key-value pairs. Used for passing structured information between agents and tools.

## Example Usage

```typescript
import { StreamAgentPartsAgentsResponseDataPart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsAgentsResponseDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                                         | [operations.StreamAgentPartsAgentsResponse200TextEventStreamResponseBodyData12DataKind](../../models/operations/streamagentpartsagentsresponse200texteventstreamresponsebodydata12datakind.md) | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `data`                                                                                                                                                                                         | Record<string, *any*>                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                             | N/A                                                                                                                                                                                            |
| `metadata`                                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                             | N/A                                                                                                                                                                                            |