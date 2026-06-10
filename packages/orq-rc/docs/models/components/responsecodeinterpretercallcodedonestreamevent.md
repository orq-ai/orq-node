# ResponseCodeInterpreterCallCodeDoneStreamEvent

A `response.code_interpreter_call_code.done` server-sent event.

## Example Usage

```typescript
import { ResponseCodeInterpreterCallCodeDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCodeInterpreterCallCodeDoneStreamEvent = {
  code: "<value>",
  itemId: "<id>",
  outputIndex: 202916,
  sequenceNumber: 33438,
  type: "response.code_interpreter_call_code.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `code`                                                        | *string*                                                      | :heavy_check_mark:                                            | The completed code interpreter code.                          |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.code_interpreter_call_code.done"*                  | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |