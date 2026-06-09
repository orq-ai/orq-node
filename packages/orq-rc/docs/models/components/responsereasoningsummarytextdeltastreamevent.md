# ResponseReasoningSummaryTextDeltaStreamEvent

## Example Usage

```typescript
import { ResponseReasoningSummaryTextDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryTextDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 540085,
    sequenceNumber: 718040,
    summaryIndex: 520491,
    type: "response.reasoning_summary_text.delta",
  },
  event: "response.reasoning_summary_text.delta",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                     | [components.ResponseReasoningSummaryTextDeltaStreamEventData](../../models/components/responsereasoningsummarytextdeltastreameventdata.md) | :heavy_check_mark:                                                                                                                         | The event payload.                                                                                                                         |
| `event`                                                                                                                                    | *"response.reasoning_summary_text.delta"*                                                                                                  | :heavy_check_mark:                                                                                                                         | The SSE event name, equal to the payload's `type`.                                                                                         |