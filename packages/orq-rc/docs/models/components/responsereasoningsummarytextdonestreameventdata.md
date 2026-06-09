# ResponseReasoningSummaryTextDoneStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseReasoningSummaryTextDoneStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryTextDoneStreamEventData = {
  itemId: "<id>",
  outputIndex: 180591,
  sequenceNumber: 704807,
  summaryIndex: 563964,
  text: "<value>",
  type: "response.reasoning_summary_text.done",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `itemId`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | ID of the output item this event refers to.                                                                                              |
| `outputIndex`                                                                                                                            | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Index of the output item in the response output array.                                                                                   |
| `sequenceNumber`                                                                                                                         | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Monotonically increasing sequence number for ordering events.                                                                            |
| `summaryIndex`                                                                                                                           | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Index of the reasoning summary part.                                                                                                     |
| `text`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The completed reasoning summary text.                                                                                                    |
| `type`                                                                                                                                   | [components.ResponseReasoningSummaryTextDoneStreamEventType](../../models/components/responsereasoningsummarytextdonestreameventtype.md) | :heavy_check_mark:                                                                                                                       | The event type. Matches the SSE `event` field.                                                                                           |
| `additionalProperties`                                                                                                                   | Record<string, *any*>                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |