# ActionReviewedStreamingEvent

Emitted after a tool action has been reviewed. Contains the review decision (approved/rejected), optional mock output for rejected actions, and reviewer information.

## Example Usage

```typescript
import { ActionReviewedStreamingEvent } from "@orq-ai/node/models/components";

let value: ActionReviewedStreamingEvent = {
  type: "event.agents.action_reviewed",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    agentToolCallId: "<id>",
    review: "rejected",
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.ActionReviewedStreamingEventType](../../models/components/actionreviewedstreamingeventtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `timestamp`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | ISO timestamp of the event                                                                                 |
| `data`                                                                                                     | [components.ActionReviewedStreamingEventData](../../models/components/actionreviewedstreamingeventdata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |