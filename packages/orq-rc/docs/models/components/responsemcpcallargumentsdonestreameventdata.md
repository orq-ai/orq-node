# ResponseMcpCallArgumentsDoneStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseMcpCallArgumentsDoneStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseMcpCallArgumentsDoneStreamEventData = {
  arguments: "<value>",
  itemId: "<id>",
  outputIndex: 138890,
  sequenceNumber: 648116,
  type: "response.mcp_call_arguments.done",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `arguments`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The completed MCP-call arguments JSON.                                                                                           |
| `itemId`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | ID of the output item this event refers to.                                                                                      |
| `outputIndex`                                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Index of the output item in the response output array.                                                                           |
| `sequenceNumber`                                                                                                                 | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Monotonically increasing sequence number for ordering events.                                                                    |
| `type`                                                                                                                           | [components.ResponseMcpCallArgumentsDoneStreamEventType](../../models/components/responsemcpcallargumentsdonestreameventtype.md) | :heavy_check_mark:                                                                                                               | The event type. Matches the SSE `event` field.                                                                                   |
| `additionalProperties`                                                                                                           | Record<string, *any*>                                                                                                            | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |