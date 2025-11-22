# Ten

## Example Usage

```typescript
import { Ten } from "@orq-ai/node/models/operations";

let value: Ten = {
  type: "event.agents.execution_named",
  timestamp: "<value>",
  data: {
    name: "<value>",
    agentManifestId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody10Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody10type.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `timestamp`                                                                                                                                                                        | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | ISO timestamp of the event                                                                                                                                                         |
| `data`                                                                                                                                                                             | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody10Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody10data.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |