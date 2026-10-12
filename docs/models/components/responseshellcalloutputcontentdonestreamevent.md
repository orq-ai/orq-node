# ResponseShellCallOutputContentDoneStreamEvent

A `response.shell_call_output_content.done` server-sent event.

## Example Usage

```typescript
import { ResponseShellCallOutputContentDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseShellCallOutputContentDoneStreamEvent = {
  commandIndex: 853788,
  itemId: "<id>",
  output: [],
  outputIndex: 642098,
  sequenceNumber: 774113,
  type: "response.shell_call_output_content.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `commandIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the shell command.                                   |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `output`                                                      | Record<string, *any*>[]                                       | :heavy_check_mark:                                            | N/A                                                           |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.shell_call_output_content.done"*                   | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |