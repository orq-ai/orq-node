# Nine

## Example Usage

```typescript
import { Nine } from "@orq-ai/node/models/operations";

let value: Nine = {
  type: "event.agents.execution_reviewed",
  timestamp: "<value>",
  data: {},
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody9Type](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody9type.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `timestamp`                                                                                                                                                                      | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | ISO timestamp of the event                                                                                                                                                       |
| `data`                                                                                                                                                                           | [operations.StreamRunAgentDataAgentsResponse200TextEventStreamResponseBody9Data](../../models/operations/streamrunagentdataagentsresponse200texteventstreamresponsebody9data.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |