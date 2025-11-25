# ActionReviewRequestedStreamingEvent

Emitted when a tool action requires approval before execution. Contains the tool details, input arguments, and whether approval is mandatory.

## Example Usage

```typescript
import { ActionReviewRequestedStreamingEvent } from "@orq-ai/node/models/components";

let value: ActionReviewRequestedStreamingEvent = {
  type: "event.agents.action_review_requested",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    requiresApproval: false,
    tool: {
      id: "<id>",
      actionType: "<value>",
    },
    input: {
      "key": "<value>",
    },
    agentToolCallId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.ActionReviewRequestedStreamingEventType](../../models/components/actionreviewrequestedstreamingeventtype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `timestamp`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ISO timestamp of the event                                                                                               |
| `data`                                                                                                                   | [components.ActionReviewRequestedStreamingEventData](../../models/components/actionreviewrequestedstreamingeventdata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |