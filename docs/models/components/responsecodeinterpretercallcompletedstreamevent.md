# ResponseCodeInterpreterCallCompletedStreamEvent

A `response.code_interpreter_call.completed` server-sent event.

## Example Usage

```typescript
import { ResponseCodeInterpreterCallCompletedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCodeInterpreterCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 459812,
  sequenceNumber: 729005,
  type: "response.code_interpreter_call.completed",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.code_interpreter_call.completed"*                  | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |