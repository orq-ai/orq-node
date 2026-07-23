# ResponseCustomToolCallInputDeltaStreamEvent

A `response.custom_tool_call_input.delta` server-sent event.

## Example Usage

```typescript
import { ResponseCustomToolCallInputDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCustomToolCallInputDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 489568,
  sequenceNumber: 887496,
  type: "response.custom_tool_call_input.delta",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `delta`                                                       | *string*                                                      | :heavy_check_mark:                                            | Incremental text or argument chunk.                           |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.custom_tool_call_input.delta"*                     | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |