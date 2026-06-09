# ResponseMcpCallArgumentsDeltaStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseMcpCallArgumentsDeltaStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseMcpCallArgumentsDeltaStreamEventData = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 715170,
  sequenceNumber: 329319,
  type: "response.mcp_call_arguments.delta",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `delta`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Incremental text or argument chunk.                                                                                                |
| `itemId`                                                                                                                           | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | ID of the output item this event refers to.                                                                                        |
| `outputIndex`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Index of the output item in the response output array.                                                                             |
| `sequenceNumber`                                                                                                                   | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Monotonically increasing sequence number for ordering events.                                                                      |
| `type`                                                                                                                             | [components.ResponseMcpCallArgumentsDeltaStreamEventType](../../models/components/responsemcpcallargumentsdeltastreameventtype.md) | :heavy_check_mark:                                                                                                                 | The event type. Matches the SSE `event` field.                                                                                     |
| `additionalProperties`                                                                                                             | Record<string, *any*>                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |