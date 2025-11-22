# StreamAgentDataAgentsResponseData

## Example Usage

```typescript
import { StreamAgentDataAgentsResponseData } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponseData = {
  agentId: "<id>",
  messageDifference: {},
  iteration: 9772.98,
  accumulatedExecutionTime: 165.16,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `messageDifference`                                                                                  | Record<string, [operations.DataMessageDifference](../../models/operations/datamessagedifference.md)> | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `choice`                                                                                             | [operations.DataChoice](../../models/operations/datachoice.md)                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `choiceIndex`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `iteration`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `accumulatedExecutionTime`                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `responseId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `usage`                                                                                              | [operations.StreamAgentDataUsage](../../models/operations/streamagentdatausage.md)                   | :heavy_minus_sign:                                                                                   | Usage statistics for the completion request.                                                         |