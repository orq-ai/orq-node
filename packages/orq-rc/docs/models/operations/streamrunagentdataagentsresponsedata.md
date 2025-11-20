# StreamRunAgentDataAgentsResponseData

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponseData } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataAgentsResponseData = {
  lastMessage: "<value>",
  finishReason: "function_call",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `lastMessage`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `finishReason`                                                               | [operations.FinishReason](../../models/operations/finishreason.md)           | :heavy_check_mark:                                                           | The reason why the agent execution became inactive                           |
| `pendingToolCalls`                                                           | [operations.PendingToolCalls](../../models/operations/pendingtoolcalls.md)[] | :heavy_minus_sign:                                                           | Tool calls that are pending user response (for function_call finish reason)  |