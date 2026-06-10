# ResponseRefusalDoneStreamEvent

A `response.refusal.done` server-sent event.

## Example Usage

```typescript
import { ResponseRefusalDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseRefusalDoneStreamEvent = {
  contentIndex: 324363,
  itemId: "<id>",
  outputIndex: 766495,
  refusal: "<value>",
  sequenceNumber: 116206,
  type: "response.refusal.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `contentIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the content part within the output item.             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `refusal`                                                     | *string*                                                      | :heavy_check_mark:                                            | The completed refusal text.                                   |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.refusal.done"*                                     | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |