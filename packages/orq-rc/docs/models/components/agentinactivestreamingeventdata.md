# AgentInactiveStreamingEventData

## Example Usage

```typescript
import { AgentInactiveStreamingEventData } from "@orq-ai/node/models/components";

let value: AgentInactiveStreamingEventData = {
  lastMessage: "<value>",
  finishReason: "max_iterations",
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `lastMessage`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `lastMessageFull`                                                                                          | [components.LastMessageFull](../../models/components/lastmessagefull.md)                                   | :heavy_minus_sign:                                                                                         | Full last message in A2A format (for backwards compatibility)                                              |
| `finishReason`                                                                                             | [components.FinishReason](../../models/components/finishreason.md)                                         | :heavy_check_mark:                                                                                         | The reason why the agent execution became inactive                                                         |
| `pendingToolCalls`                                                                                         | [components.PendingToolCalls](../../models/components/pendingtoolcalls.md)[]                               | :heavy_minus_sign:                                                                                         | Tool calls that are pending user response (for function_call finish reason)                                |
| `usage`                                                                                                    | [components.AgentInactiveStreamingEventUsage](../../models/components/agentinactivestreamingeventusage.md) | :heavy_minus_sign:                                                                                         | Token usage from the last agent message                                                                    |
| `workflowRunId`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `responseId`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | ID of the response tracking this execution                                                                 |