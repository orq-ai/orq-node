# StreamAgentDataAgentsResponse200Data

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200Data } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200Data = {
  lastMessage: "<value>",
  finishReason: "max_iterations",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `lastMessage`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `finishReason`                                                                       | [operations.DataFinishReason](../../models/operations/datafinishreason.md)           | :heavy_check_mark:                                                                   | The reason why the agent execution became inactive                                   |
| `pendingToolCalls`                                                                   | [operations.DataPendingToolCalls](../../models/operations/datapendingtoolcalls.md)[] | :heavy_minus_sign:                                                                   | Tool calls that are pending user response (for function_call finish reason)          |