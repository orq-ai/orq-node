# ResponseCodeInterpreterCallCodeDeltaStreamEvent

A `response.code_interpreter_call_code.delta` server-sent event.

## Example Usage

```typescript
import { ResponseCodeInterpreterCallCodeDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCodeInterpreterCallCodeDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 213785,
  sequenceNumber: 67075,
  type: "response.code_interpreter_call_code.delta",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `delta`                                                       | *string*                                                      | :heavy_check_mark:                                            | Incremental text or argument chunk.                           |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.code_interpreter_call_code.delta"*                 | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |