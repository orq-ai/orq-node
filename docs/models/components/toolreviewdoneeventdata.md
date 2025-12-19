# ToolReviewDoneEventData

## Example Usage

```typescript
import { ToolReviewDoneEventData } from "@orq-ai/node/models/components";

let value: ToolReviewDoneEventData = {
  toolId: "<id>",
  toolCallId: "<id>",
  review: "approved",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `toolId`                                                             | *string*                                                             | :heavy_check_mark:                                                   | Unique identifier for the tool in the tool registry                  |
| `toolCallId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The tool call ID that was reviewed                                   |
| `review`                                                             | [components.ReviewOutcome](../../models/components/reviewoutcome.md) | :heavy_check_mark:                                                   | The review decision                                                  |