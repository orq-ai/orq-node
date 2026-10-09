# ResponseShellCallCommandDeltaStreamEvent

A `response.shell_call_command.delta` server-sent event.

## Example Usage

```typescript
import { ResponseShellCallCommandDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseShellCallCommandDeltaStreamEvent = {
  commandIndex: 272606,
  delta: "<value>",
  outputIndex: 1657,
  sequenceNumber: 819829,
  type: "response.shell_call_command.delta",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `commandIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the shell command.                                   |
| `delta`                                                       | *string*                                                      | :heavy_check_mark:                                            | Incremental text or argument chunk.                           |
| `obfuscation`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Obfuscation padding accompanying the delta, when present.     |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.shell_call_command.delta"*                         | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |