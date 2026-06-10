# ResponseReasoningDoneStreamEvent

A `response.reasoning.done` server-sent event.

## Example Usage

```typescript
import { ResponseReasoningDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningDoneStreamEvent = {
  contentIndex: 842760,
  itemId: "<id>",
  outputIndex: 366874,
  sequenceNumber: 570183,
  text: "<value>",
  type: "response.reasoning.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `text`                                                        | *string*                                                      | :heavy_check_mark:                                            | The completed reasoning text.                                 |
| `type`                                                        | *"response.reasoning.done"*                                   | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |