# ResponseOutputTextDeltaStreamEvent

A `response.output_text.delta` server-sent event.

## Example Usage

```typescript
import { ResponseOutputTextDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputTextDeltaStreamEvent = {
  contentIndex: 467304,
  delta: "<value>",
  itemId: "<id>",
  logprobs: [
    {},
  ],
  outputIndex: 775448,
  sequenceNumber: 615240,
  type: "response.output_text.delta",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `delta`                                                       | *string*                                                      | :heavy_check_mark:                                            | Incremental text or argument chunk.                           |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `logprobs`                                                    | Record<string, *any*>[]                                       | :heavy_check_mark:                                            | Log probability information for the emitted tokens.           |
| `obfuscation`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Obfuscation padding accompanying the delta, when present.     |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.output_text.delta"*                                | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |