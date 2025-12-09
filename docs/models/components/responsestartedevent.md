# ResponseStartedEvent

Emitted when the agent begins processing. Contains identifiers for tracking the response.

## Example Usage

```typescript
import { ResponseStartedEvent } from "@orq-ai/node/models/components";

let value: ResponseStartedEvent = {
  type: "response.started",
  timestamp: "<value>",
  data: {
    responseId: "<id>",
    taskId: "<id>",
    model: "Silverado",
    workflowRunId: "<id>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *"response.started"*                               | :heavy_check_mark:                                 | N/A                                                |
| `timestamp`                                        | *string*                                           | :heavy_check_mark:                                 | ISO timestamp of when the event occurred           |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |