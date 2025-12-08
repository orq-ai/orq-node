# AgentThoughtStreamingEventData

## Example Usage

```typescript
import { AgentThoughtStreamingEventData } from "@orq-ai/node/models/components";

let value: AgentThoughtStreamingEventData = {
  agentId: "<id>",
  messageDifference: {},
  iteration: 310.69,
  accumulatedExecutionTime: 6712.53,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `messageDifference`                                                                                      | Record<string, [components.MessageDifference](../../models/components/messagedifference.md)>             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `choice`                                                                                                 | [components.Choice](../../models/components/choice.md)                                                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `choiceIndex`                                                                                            | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `iteration`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `accumulatedExecutionTime`                                                                               | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `responseId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `usage`                                                                                                  | [components.AgentThoughtStreamingEventUsage](../../models/components/agentthoughtstreamingeventusage.md) | :heavy_minus_sign:                                                                                       | Usage statistics for the completion request.                                                             |