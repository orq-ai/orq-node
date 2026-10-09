# ResponseShellCallCommandDoneStreamEvent

A `response.shell_call_command.done` server-sent event.

## Example Usage

```typescript
import { ResponseShellCallCommandDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseShellCallCommandDoneStreamEvent = {
  command: "<value>",
  commandIndex: 433813,
  outputIndex: 153489,
  sequenceNumber: 630865,
  type: "response.shell_call_command.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `command`                                                     | *string*                                                      | :heavy_check_mark:                                            | The shell command.                                            |
| `commandIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the shell command.                                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.shell_call_command.done"*                          | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |