# ActionReviewedStreamingEventData

## Example Usage

```typescript
import { ActionReviewedStreamingEventData } from "@orq-ai/node/models/components";

let value: ActionReviewedStreamingEventData = {
  agentId: "<id>",
  actionId: "<id>",
  agentToolCallId: "<id>",
  review: "rejected",
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `agentId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `actionId`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `agentToolCallId`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `review`                                               | [components.Review](../../models/components/review.md) | :heavy_check_mark:                                     | N/A                                                    |
| `mockOutput`                                           | Record<string, *any*>                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `reviewSource`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `reviewedById`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `workflowRunId`                                        | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |