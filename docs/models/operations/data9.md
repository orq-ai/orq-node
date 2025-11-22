# Data9

## Example Usage

```typescript
import { Data9 } from "@orq-ai/node/models/operations";

let value: Data9 = {
  type: "event.agents.execution_reviewed",
  timestamp: "<value>",
  data: {},
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                     | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody9Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody9type.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `timestamp`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ISO timestamp of the event                                                                                                                                                 |
| `data`                                                                                                                                                                     | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody9Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody9data.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |