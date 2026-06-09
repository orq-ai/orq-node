# ResponseMcpCallArgumentsDeltaStreamEvent

## Example Usage

```typescript
import { ResponseMcpCallArgumentsDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseMcpCallArgumentsDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 976515,
    sequenceNumber: 423634,
    type: "response.mcp_call_arguments.delta",
  },
  event: "response.mcp_call_arguments.delta",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                             | [components.ResponseMcpCallArgumentsDeltaStreamEventData](../../models/components/responsemcpcallargumentsdeltastreameventdata.md) | :heavy_check_mark:                                                                                                                 | The event payload.                                                                                                                 |
| `event`                                                                                                                            | *"response.mcp_call_arguments.delta"*                                                                                              | :heavy_check_mark:                                                                                                                 | The SSE event name, equal to the payload's `type`.                                                                                 |