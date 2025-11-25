# Data5

## Example Usage

```typescript
import { Data5 } from "@orq-ai/node/models/operations";

let value: Data5 = {
  type: "event.agents.errored",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 4606.68,
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [operations.StreamAgentDataAgentsResponse200TextEventStreamType](../../models/operations/streamagentdataagentsresponse200texteventstreamtype.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `timestamp`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ISO timestamp of the event                                                                                                                       |
| `data`                                                                                                                                           | [operations.StreamAgentDataAgentsResponse200TextEventStreamData](../../models/operations/streamagentdataagentsresponse200texteventstreamdata.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |