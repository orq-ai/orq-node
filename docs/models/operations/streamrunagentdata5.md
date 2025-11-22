# StreamRunAgentData5

## Example Usage

```typescript
import { StreamRunAgentData5 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentData5 = {
  type: "event.agents.errored",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 1241.14,
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamType](../../models/operations/streamrunagentdataagentsresponse200texteventstreamtype.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `timestamp`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | ISO timestamp of the event                                                                                                                             |
| `data`                                                                                                                                                 | [operations.StreamRunAgentDataAgentsResponse200Data](../../models/operations/streamrunagentdataagentsresponse200data.md)                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |