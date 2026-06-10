# ResponseOutputItemAddedStreamEvent

A `response.output_item.added` server-sent event.

## Example Usage

```typescript
import { ResponseOutputItemAddedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputItemAddedStreamEvent = {
  item: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  outputIndex: 91835,
  sequenceNumber: 487506,
  type: "response.output_item.added",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `item`                                                        | Record<string, *any*>                                         | :heavy_check_mark:                                            | The output item (message, function call, reasoning, etc.).    |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.output_item.added"*                                | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |