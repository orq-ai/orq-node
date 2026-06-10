# ResponseOutputItemDoneStreamEvent

A `response.output_item.done` server-sent event.

## Example Usage

```typescript
import { ResponseOutputItemDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputItemDoneStreamEvent = {
  item: {},
  outputIndex: 796105,
  sequenceNumber: 728173,
  type: "response.output_item.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `item`                                                        | Record<string, *any*>                                         | :heavy_check_mark:                                            | The output item (message, function call, reasoning, etc.).    |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.output_item.done"*                                 | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |