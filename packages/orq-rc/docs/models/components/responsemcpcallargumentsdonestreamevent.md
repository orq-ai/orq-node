# ResponseMcpCallArgumentsDoneStreamEvent

## Example Usage

```typescript
import { ResponseMcpCallArgumentsDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseMcpCallArgumentsDoneStreamEvent = {
  data: {
    arguments: "<value>",
    itemId: "<id>",
    outputIndex: 399777,
    sequenceNumber: 487593,
    type: "response.mcp_call_arguments.done",
  },
  event: "response.mcp_call_arguments.done",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                           | [components.ResponseMcpCallArgumentsDoneStreamEventData](../../models/components/responsemcpcallargumentsdonestreameventdata.md) | :heavy_check_mark:                                                                                                               | The event payload.                                                                                                               |
| `event`                                                                                                                          | *"response.mcp_call_arguments.done"*                                                                                             | :heavy_check_mark:                                                                                                               | The SSE event name, equal to the payload's `type`.                                                                               |