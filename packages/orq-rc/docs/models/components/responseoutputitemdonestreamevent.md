# ResponseOutputItemDoneStreamEvent

A `response.output_item.done` server-sent event.

## Example Usage

```typescript
import { ResponseOutputItemDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputItemDoneStreamEvent = {
  item: {
    "content": [
      {
        "key": "<value>",
        "key1": "<value>",
      },
    ],
    "role": "<value>",
    "type": "message",
  },
  outputIndex: 753292,
  sequenceNumber: 984360,
  type: "response.output_item.done",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `item`                                                                   | *components.ResponseOutputItem*                                          | :heavy_check_mark:                                                       | One item of a response's output. The `type` field says which kind it is. |
| `outputIndex`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | Index of the output item in the response output array.                   |
| `sequenceNumber`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | Monotonically increasing sequence number for ordering events.            |
| `type`                                                                   | *"response.output_item.done"*                                            | :heavy_check_mark:                                                       | The event type. Discriminates the payload.                               |
| `additionalProperties`                                                   | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |