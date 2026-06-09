# ResponseReasoningSummaryPartStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseReasoningSummaryPartStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryPartStreamEventData = {
  itemId: "<id>",
  outputIndex: 562061,
  part: {
    "key": "<value>",
  },
  sequenceNumber: 261261,
  summaryIndex: 475231,
  type: "response.reasoning_summary_part.done",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `itemId`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | ID of the output item this event refers to.                                                                                      |
| `outputIndex`                                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Index of the output item in the response output array.                                                                           |
| `part`                                                                                                                           | Record<string, *any*>                                                                                                            | :heavy_check_mark:                                                                                                               | The reasoning summary part.                                                                                                      |
| `sequenceNumber`                                                                                                                 | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Monotonically increasing sequence number for ordering events.                                                                    |
| `summaryIndex`                                                                                                                   | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Index of the reasoning summary part.                                                                                             |
| `type`                                                                                                                           | [components.ResponseReasoningSummaryPartStreamEventType](../../models/components/responsereasoningsummarypartstreameventtype.md) | :heavy_check_mark:                                                                                                               | The event type. Matches the SSE `event` field.                                                                                   |
| `additionalProperties`                                                                                                           | Record<string, *any*>                                                                                                            | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |