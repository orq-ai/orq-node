# ResponseCustomToolCallInputDoneStreamEvent

A `response.custom_tool_call_input.done` server-sent event.

## Example Usage

```typescript
import { ResponseCustomToolCallInputDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCustomToolCallInputDoneStreamEvent = {
  input: "<value>",
  itemId: "<id>",
  outputIndex: 586961,
  sequenceNumber: 603044,
  type: "response.custom_tool_call_input.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `input`                                                       | *string*                                                      | :heavy_check_mark:                                            | The completed custom tool call input.                         |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.custom_tool_call_input.done"*                      | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |