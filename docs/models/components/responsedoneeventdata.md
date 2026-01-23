# ResponseDoneEventData

## Example Usage

```typescript
import { ResponseDoneEventData } from "@orq-ai/node/models/components";

let value: ResponseDoneEventData = {
  finishReason: "function_call",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `finishReason`                                                                                                 | [components.ResponseDoneEventFinishReason](../../models/components/responsedoneeventfinishreason.md)           | :heavy_check_mark:                                                                                             | The reason why the agent stopped generating                                                                    |
| `usage`                                                                                                        | [components.ResponseDoneEventUsage](../../models/components/responsedoneeventusage.md)                         | :heavy_minus_sign:                                                                                             | Token usage statistics for the complete response                                                               |
| `pendingToolCalls`                                                                                             | [components.ResponseDoneEventPendingToolCalls](../../models/components/responsedoneeventpendingtoolcalls.md)[] | :heavy_minus_sign:                                                                                             | Tool calls awaiting user response (when finishReason is function_call)                                         |