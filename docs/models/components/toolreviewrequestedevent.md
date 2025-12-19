# ToolReviewRequestedEvent

Emitted when a tool action requires approval before execution. The execution will pause until reviewed.

## Example Usage

```typescript
import { ToolReviewRequestedEvent } from "@orq-ai/node/models/components";

let value: ToolReviewRequestedEvent = {
  type: "tool.review.requested",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    arguments: {
      "key": "<value>",
      "key1": "<value>",
    },
    requiresApproval: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *"tool.review.requested"*                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `timestamp`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | ISO timestamp of when the event occurred                                                           |
| `data`                                                                                             | [components.ToolReviewRequestedEventData](../../models/components/toolreviewrequestedeventdata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |