# Eleven

## Example Usage

```typescript
import { Eleven } from "@orq-ai/node/models/operations";

let value: Eleven = {
  type: "event.agents.handed_off",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    input: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody11Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody11type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `timestamp`                                                                                                                                                                        | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | ISO timestamp of the event                                                                                                                                                         |
| `data`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody11Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody11data.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |