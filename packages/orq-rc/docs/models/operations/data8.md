# Data8

## Example Usage

```typescript
import { Data8 } from "@orq-ai/node/models/operations";

let value: Data8 = {
  type: "event.agents.execution_review_required",
  timestamp: "<value>",
  data: {},
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                     | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody8Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody8type.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `timestamp`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ISO timestamp of the event                                                                                                                                                 |
| `data`                                                                                                                                                                     | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody8Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody8data.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |