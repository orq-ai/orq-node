# StreamAgentResponseBody

Server-Sent Event stream successfully established. Returns real-time events including agent messages, tool calls, status updates, and completion signals. The stream ends with a [DONE] sentinel value.

## Example Usage

```typescript
import { StreamAgentResponseBody } from "@orq-ai/node/models/operations";

let value: StreamAgentResponseBody = {
  data: {
    type: "agents.error",
    timestamp: "<value>",
    data: {
      error: "<value>",
      code: "<value>",
    },
  },
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `data`                       | *operations.StreamAgentData* | :heavy_check_mark:           | N/A                          |