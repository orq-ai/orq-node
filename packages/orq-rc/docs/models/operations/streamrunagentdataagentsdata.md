# StreamRunAgentDataAgentsData

## Example Usage

```typescript
import { StreamRunAgentDataAgentsData } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataAgentsData = {
  agentId: "<id>",
  messageDifference: {
    "key": {
      messageId: "<id>",
      role: "system",
      parts: [],
      agentId: "<id>",
      agentExecutionId: "<id>",
      workspaceId: "<id>",
    },
  },
  iteration: 15.75,
  accumulatedExecutionTime: 4539.56,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `agentId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageDifference`                                                                          | Record<string, [operations.MessageDifference](../../models/operations/messagedifference.md)> | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `choice`                                                                                     | [operations.Choice](../../models/operations/choice.md)                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `choiceIndex`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `iteration`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `accumulatedExecutionTime`                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |