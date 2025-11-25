# AgentMessageCreatedStreamingEventData

## Example Usage

```typescript
import { AgentMessageCreatedStreamingEventData } from "@orq-ai/node/models/components";

let value: AgentMessageCreatedStreamingEventData = {
  workflowRunId: "<id>",
  spanId: "<id>",
  parentId: "<id>",
  message: [
    {
      role: "tool",
      parts: [],
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `workflowRunId`                                            | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `spanId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `parentId`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `message`                                                  | [components.Message](../../models/components/message.md)[] | :heavy_check_mark:                                         | N/A                                                        |