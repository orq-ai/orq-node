# ExecutionReviewedStreamingEvent

Emitted after the agent execution has been reviewed. The execution will resume processing after this event.

## Example Usage

```typescript
import { ExecutionReviewedStreamingEvent } from "@orq-ai/node/models/components";

let value: ExecutionReviewedStreamingEvent = {
  type: "event.agents.execution_reviewed",
  timestamp: "<value>",
  data: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.ExecutionReviewedStreamingEventType](../../models/components/executionreviewedstreamingeventtype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `timestamp`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | ISO timestamp of the event                                                                                       |
| `data`                                                                                                           | [components.ExecutionReviewedStreamingEventData](../../models/components/executionreviewedstreamingeventdata.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |