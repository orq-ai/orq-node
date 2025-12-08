# AgentErroredStreamingEventData

## Example Usage

```typescript
import { AgentErroredStreamingEventData } from "@orq-ai/node/models/components";

let value: AgentErroredStreamingEventData = {
  error: "<value>",
  code: 3555.92,
  workflowRunId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `error`                                    | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `code`                                     | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `responseId`                               | *string*                                   | :heavy_minus_sign:                         | ID of the response tracking this execution |
| `workflowRunId`                            | *string*                                   | :heavy_check_mark:                         | N/A                                        |