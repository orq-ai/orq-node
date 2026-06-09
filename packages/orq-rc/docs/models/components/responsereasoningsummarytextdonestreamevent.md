# ResponseReasoningSummaryTextDoneStreamEvent

## Example Usage

```typescript
import { ResponseReasoningSummaryTextDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningSummaryTextDoneStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 548177,
    sequenceNumber: 768286,
    summaryIndex: 237475,
    text: "<value>",
    type: "response.reasoning_summary_text.done",
  },
  event: "response.reasoning_summary_text.done",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                   | [components.ResponseReasoningSummaryTextDoneStreamEventData](../../models/components/responsereasoningsummarytextdonestreameventdata.md) | :heavy_check_mark:                                                                                                                       | The event payload.                                                                                                                       |
| `event`                                                                                                                                  | *"response.reasoning_summary_text.done"*                                                                                                 | :heavy_check_mark:                                                                                                                       | The SSE event name, equal to the payload's `type`.                                                                                       |