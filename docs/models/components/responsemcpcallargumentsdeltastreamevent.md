# ResponseMCPCallArgumentsDeltaStreamEvent

A `response.mcp_call_arguments.delta` server-sent event.

## Example Usage

```typescript
import { ResponseMCPCallArgumentsDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseMCPCallArgumentsDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 736027,
  sequenceNumber: 135378,
  type: "response.mcp_call_arguments.delta",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `delta`                                                       | *string*                                                      | :heavy_check_mark:                                            | Incremental text or argument chunk.                           |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.mcp_call_arguments.delta"*                         | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |