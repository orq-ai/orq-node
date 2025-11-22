# StreamRunAgentResponseBody

Server-Sent Event stream successfully established. Delivers real-time agent execution events including message fragments, tool invocations, intermediate results, and completion status. Stream terminates with [DONE] sentinel upon completion.

## Example Usage

```typescript
import { StreamRunAgentResponseBody } from "@orq-ai/node/models/operations";

let value: StreamRunAgentResponseBody = {
  data: {
    type: "event.agents.handed_off",
    timestamp: "<value>",
    data: {
      agentId: "<id>",
      input: "<value>",
    },
  },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `data`                          | *operations.StreamRunAgentData* | :heavy_check_mark:              | N/A                             |