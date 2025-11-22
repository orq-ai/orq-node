# Data16

## Example Usage

```typescript
import { Data16 } from "@orq-ai/node/models/operations";

let value: Data16 = {
  type: "agents.timeout",
  timestamp: "<value>",
  data: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody16Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody16type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | ISO timestamp of the event                                                                                                                                                   |
| `data`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody16Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody16data.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |