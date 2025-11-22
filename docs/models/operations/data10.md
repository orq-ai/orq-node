# Data10

## Example Usage

```typescript
import { Data10 } from "@orq-ai/node/models/operations";

let value: Data10 = {
  type: "event.agents.execution_named",
  timestamp: "<value>",
  data: {
    name: "<value>",
    agentManifestId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody10Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody10type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | ISO timestamp of the event                                                                                                                                                   |
| `data`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody10Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody10data.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |