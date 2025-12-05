# ExecutionReviewRequiredStreamingEvent

Emitted when the entire agent execution requires human review before proceeding. The execution will pause until reviewed.

## Example Usage

```typescript
import { ExecutionReviewRequiredStreamingEvent } from "@orq-ai/node/models/components";

let value: ExecutionReviewRequiredStreamingEvent = {
  type: "event.agents.execution_review_required",
  timestamp: "<value>",
  data: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *"event.agents.execution_review_required"*                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `timestamp`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | ISO timestamp of the event                                                                                                   |
| `data`                                                                                                                       | [components.ExecutionReviewRequiredStreamingEventData](../../models/components/executionreviewrequiredstreamingeventdata.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |