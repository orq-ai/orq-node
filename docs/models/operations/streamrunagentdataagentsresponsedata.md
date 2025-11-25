# StreamRunAgentDataAgentsResponseData

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponseData } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataAgentsResponseData = {
  lastMessage: "<value>",
  finishReason: "function_call",
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `lastMessage`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `lastMessageFull`                                                                        | [operations.LastMessageFull](../../models/operations/lastmessagefull.md)                 | :heavy_minus_sign:                                                                       | Full last message in A2A format (for backwards compatibility)                            |
| `finishReason`                                                                           | [operations.FinishReason](../../models/operations/finishreason.md)                       | :heavy_check_mark:                                                                       | The reason why the agent execution became inactive                                       |
| `pendingToolCalls`                                                                       | [operations.PendingToolCalls](../../models/operations/pendingtoolcalls.md)[]             | :heavy_minus_sign:                                                                       | Tool calls that are pending user response (for function_call finish reason)              |
| `usage`                                                                                  | [operations.StreamRunAgentDataUsage](../../models/operations/streamrunagentdatausage.md) | :heavy_minus_sign:                                                                       | Token usage from the last agent message                                                  |
| `workflowRunId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `responseId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID of the response tracking this execution                                               |