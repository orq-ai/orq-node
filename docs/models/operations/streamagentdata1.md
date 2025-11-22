# StreamAgentData1

## Example Usage

```typescript
import { StreamAgentData1 } from "@orq-ai/node/models/operations";

let value: StreamAgentData1 = {
  type: "agents.execution_started",
  timestamp: "<value>",
  data: {
    agentTaskId: "<id>",
    workspaceId: "<id>",
    traceId: "<id>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [operations.StreamAgentDataType](../../models/operations/streamagentdatatype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `timestamp`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | ISO timestamp of the event                                                       |
| `data`                                                                           | [operations.StreamAgentDataData](../../models/operations/streamagentdatadata.md) | :heavy_check_mark:                                                               | N/A                                                                              |