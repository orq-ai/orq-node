# ResponseShellCallOutputContentDeltaStreamEvent

A `response.shell_call_output_content.delta` server-sent event.

## Example Usage

```typescript
import { ResponseShellCallOutputContentDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseShellCallOutputContentDeltaStreamEvent = {
  commandIndex: 743475,
  delta: {
    "key": "<value>",
    "key1": "<value>",
  },
  itemId: "<id>",
  outputIndex: 503237,
  sequenceNumber: 378596,
  type: "response.shell_call_output_content.delta",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `commandIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the shell command.                                   |
| `delta`                                                       | Record<string, *any*>                                         | :heavy_check_mark:                                            | Shell stdout and stderr deltas.                               |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.shell_call_output_content.delta"*                  | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |