# ResponseShellCallCommandAddedStreamEvent

A `response.shell_call_command.added` server-sent event.

## Example Usage

```typescript
import { ResponseShellCallCommandAddedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseShellCallCommandAddedStreamEvent = {
  command: "<value>",
  commandIndex: 157854,
  outputIndex: 935090,
  sequenceNumber: 474875,
  type: "response.shell_call_command.added",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `command`                                                     | *string*                                                      | :heavy_check_mark:                                            | The shell command.                                            |
| `commandIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the shell command.                                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.shell_call_command.added"*                         | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |