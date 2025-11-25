# StreamAgentDataAgentsResponse200Data

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200Data } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200Data = {
  lastMessage: "<value>",
  finishReason: "max_iterations",
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `lastMessage`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastMessageFull`                                                                              | [operations.DataLastMessageFull](../../models/operations/datalastmessagefull.md)               | :heavy_minus_sign:                                                                             | Full last message in A2A format (for backwards compatibility)                                  |
| `finishReason`                                                                                 | [operations.DataFinishReason](../../models/operations/datafinishreason.md)                     | :heavy_check_mark:                                                                             | The reason why the agent execution became inactive                                             |
| `pendingToolCalls`                                                                             | [operations.DataPendingToolCalls](../../models/operations/datapendingtoolcalls.md)[]           | :heavy_minus_sign:                                                                             | Tool calls that are pending user response (for function_call finish reason)                    |
| `usage`                                                                                        | [operations.StreamAgentDataAgentsUsage](../../models/operations/streamagentdataagentsusage.md) | :heavy_minus_sign:                                                                             | Token usage from the last agent message                                                        |
| `workflowRunId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `responseId`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | ID of the response tracking this execution                                                     |