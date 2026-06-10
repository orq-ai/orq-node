# ResponseReasoningSummaryPartDoneStreamEvent

A `response.reasoning_summary_part.done` server-sent event.

## Example Usage

```typescript
import { ResponseReasoningSummaryPartDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryPartDoneStreamEvent = {
  itemId: "<id>",
  outputIndex: 680285,
  part: {
    "key": "<value>",
  },
  sequenceNumber: 606296,
  summaryIndex: 996469,
  type: "response.reasoning_summary_part.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `part`                                                        | Record<string, *any*>                                         | :heavy_check_mark:                                            | The reasoning summary part.                                   |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `summaryIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the reasoning summary part.                          |
| `type`                                                        | *"response.reasoning_summary_part.done"*                      | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |