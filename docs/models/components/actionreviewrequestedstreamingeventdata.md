# ActionReviewRequestedStreamingEventData

## Example Usage

```typescript
import { ActionReviewRequestedStreamingEventData } from "@orq-ai/node/models/components";

let value: ActionReviewRequestedStreamingEventData = {
  agentId: "<id>",
  actionId: "<id>",
  requiresApproval: false,
  tool: {
    id: "<id>",
    actionType: "<value>",
  },
  input: {
    "key": "<value>",
    "key1": "<value>",
  },
  agentToolCallId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `agentId`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `actionId`                                         | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `requiresApproval`                                 | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `tool`                                             | [components.Tool](../../models/components/tool.md) | :heavy_check_mark:                                 | N/A                                                |
| `input`                                            | Record<string, *any*>                              | :heavy_check_mark:                                 | N/A                                                |
| `agentToolCallId`                                  | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `responseId`                                       | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |