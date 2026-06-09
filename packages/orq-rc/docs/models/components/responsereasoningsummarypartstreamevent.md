# ResponseReasoningSummaryPartStreamEvent

## Example Usage

```typescript
import { ResponseReasoningSummaryPartStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryPartStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 978377,
    part: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    sequenceNumber: 460232,
    summaryIndex: 955865,
    type: "response.reasoning_summary_part.done",
  },
  event: "response.reasoning_summary_part.done",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                             | [components.ResponseReasoningSummaryPartStreamEventData](../../models/components/responsereasoningsummarypartstreameventdata.md)   | :heavy_check_mark:                                                                                                                 | The event payload.                                                                                                                 |
| `event`                                                                                                                            | [components.ResponseReasoningSummaryPartStreamEventEvent](../../models/components/responsereasoningsummarypartstreameventevent.md) | :heavy_check_mark:                                                                                                                 | The SSE event name, equal to the payload's `type`.                                                                                 |