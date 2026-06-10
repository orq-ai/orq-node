# ResponseFunctionCallArgumentsDoneStreamEvent

A `response.function_call_arguments.done` server-sent event.

## Example Usage

```typescript
import { ResponseFunctionCallArgumentsDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseFunctionCallArgumentsDoneStreamEvent = {
  arguments: "<value>",
  itemId: "<id>",
  outputIndex: 672268,
  sequenceNumber: 425865,
  type: "response.function_call_arguments.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `arguments`                                                   | *string*                                                      | :heavy_check_mark:                                            | The completed function-call arguments JSON.                   |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.function_call_arguments.done"*                     | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |