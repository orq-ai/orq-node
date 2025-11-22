# StreamRunAgentDataAgentsResponse200TextEventStreamResponseBodyData

## Example Usage

```typescript
import { StreamRunAgentDataAgentsResponse200TextEventStreamResponseBodyData } from "@orq-ai/node/models/operations";

let value: StreamRunAgentDataAgentsResponse200TextEventStreamResponseBodyData =
  {
    agentId: "<id>",
    actionId: "<id>",
    agentToolCallId: "<id>",
    review: "rejected",
  };
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `agentId`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `actionId`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `agentToolCallId`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `review`                                               | [operations.Review](../../models/operations/review.md) | :heavy_check_mark:                                     | N/A                                                    |
| `mockOutput`                                           | Record<string, *any*>                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `reviewSource`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `reviewedById`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |