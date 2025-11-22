# Data17

## Example Usage

```typescript
import { Data17 } from "@orq-ai/node/models/operations";

let value: Data17 = {
  type: "agents.error",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody17Type](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody17type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | ISO timestamp of the event                                                                                                                                                   |
| `data`                                                                                                                                                                       | [operations.StreamAgentDataAgentsResponse200TextEventStreamResponseBody17Data](../../models/operations/streamagentdataagentsresponse200texteventstreamresponsebody17data.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |