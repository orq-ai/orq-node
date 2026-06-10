# ResponseReasoningSummaryTextDoneStreamEvent

A `response.reasoning_summary_text.done` server-sent event.

## Example Usage

```typescript
import { ResponseReasoningSummaryTextDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryTextDoneStreamEvent = {
  itemId: "<id>",
  outputIndex: 548177,
  sequenceNumber: 768286,
  summaryIndex: 237475,
  text: "<value>",
  type: "response.reasoning_summary_text.done",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `summaryIndex`                                                | *number*                                                      | :heavy_check_mark:                                            | Index of the reasoning summary part.                          |
| `text`                                                        | *string*                                                      | :heavy_check_mark:                                            | The completed reasoning summary text.                         |
| `type`                                                        | *"response.reasoning_summary_text.done"*                      | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |