# ResponseReasoningSummaryPartAddedStreamEvent

A `response.reasoning_summary_part.added` server-sent event.

## Example Usage

```typescript
import { ResponseReasoningSummaryPartAddedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryPartAddedStreamEvent = {
  itemId: "<id>",
  outputIndex: 338504,
  part: {},
  sequenceNumber: 639795,
  summaryIndex: 3239,
  type: "response.reasoning_summary_part.added",
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
| `type`                                                        | *"response.reasoning_summary_part.added"*                     | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |