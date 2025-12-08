# ToolReviewDoneEvent

Emitted after a tool action has been reviewed. Contains the review decision.

## Example Usage

```typescript
import { ToolReviewDoneEvent } from "@orq-ai/node/models/components";

let value: ToolReviewDoneEvent = {
  type: "tool.review.done",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    review: "approved",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"tool.review.done"*                                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `timestamp`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | ISO timestamp of when the event occurred                                                 |
| `data`                                                                                   | [components.ToolReviewDoneEventData](../../models/components/toolreviewdoneeventdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |