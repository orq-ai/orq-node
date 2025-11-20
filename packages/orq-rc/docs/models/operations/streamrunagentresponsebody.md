# StreamRunAgentResponseBody

SSE stream of agent events

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