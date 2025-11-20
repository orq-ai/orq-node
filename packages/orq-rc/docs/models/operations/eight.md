# Eight

## Example Usage

```typescript
import { Eight } from "@orq-ai/node/models/operations";

let value: Eight = {
  type: "event.agents.execution_review_required",
  timestamp: "<value>",
  data: {},
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody8Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody8type.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `timestamp`                                                                                                                                                                      | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | ISO timestamp of the event                                                                                                                                                       |
| `data`                                                                                                                                                                           | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody8Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody8data.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |