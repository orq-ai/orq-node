# CreateAgentResponseRequestAgentsResponsesResponseBody

Agent response successfully created and completed. Returns the full conversation including all messages, tool interactions, model used, and token usage statistics. In background mode, returns immediately with initial task details. In streaming mode, returns Server-Sent Events (SSE) with real-time events.

## Example Usage

```typescript
import { CreateAgentResponseRequestAgentsResponsesResponseBody } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseRequestAgentsResponsesResponseBody = {
  data: {
    type: "tool.started",
    timestamp: "<value>",
    data: {
      toolId: "<id>",
      toolCallId: "<id>",
      arguments: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | *components.ResponseStreamingEvent*                                                     | :heavy_minus_sign:                                                                      | Union of all possible streaming events. Each event has a type field for discrimination. |