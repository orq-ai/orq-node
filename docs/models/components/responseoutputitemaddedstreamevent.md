# ResponseOutputItemAddedStreamEvent

A `response.output_item.added` server-sent event.

## Example Usage

```typescript
import { ResponseOutputItemAddedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputItemAddedStreamEvent = {
  item: {},
  outputIndex: 487506,
  sequenceNumber: 887162,
  type: "response.output_item.added",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `item`                                                                   | *components.ResponseOutputItem*                                          | :heavy_check_mark:                                                       | One item of a response's output. The `type` field says which kind it is. |
| `outputIndex`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | Index of the output item in the response output array.                   |
| `sequenceNumber`                                                         | *number*                                                                 | :heavy_check_mark:                                                       | Monotonically increasing sequence number for ordering events.            |
| `type`                                                                   | *"response.output_item.added"*                                           | :heavy_check_mark:                                                       | The event type. Discriminates the payload.                               |
| `additionalProperties`                                                   | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |