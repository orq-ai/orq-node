# StreamAgentDataAgentsResponse200TextEventStreamResponseBody7Data

## Example Usage

```typescript
import { StreamAgentDataAgentsResponse200TextEventStreamResponseBody7Data } from "@orq-ai/node/models/operations";

let value: StreamAgentDataAgentsResponse200TextEventStreamResponseBody7Data = {
  agentId: "<id>",
  actionId: "<id>",
  agentToolCallId: "<id>",
  review: "rejected",
  workflowRunId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `agentId`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `actionId`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `agentToolCallId`                                              | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `review`                                                       | [operations.DataReview](../../models/operations/datareview.md) | :heavy_check_mark:                                             | N/A                                                            |
| `mockOutput`                                                   | Record<string, *any*>                                          | :heavy_minus_sign:                                             | N/A                                                            |
| `reviewSource`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `reviewedById`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `workflowRunId`                                                | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |