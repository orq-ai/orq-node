# Data1

## Example Usage

```typescript
import { Data1 } from "@orq-ai/node/models/operations";

let value: Data1 = {
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [operations.StreamRunAgentDataType](../../models/operations/streamrunagentdatatype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `timestamp`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | ISO timestamp of the event                                                             |
| `data`                                                                                 | [operations.DataData](../../models/operations/datadata.md)                             | :heavy_check_mark:                                                                     | N/A                                                                                    |