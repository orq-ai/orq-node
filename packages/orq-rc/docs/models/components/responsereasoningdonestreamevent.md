# ResponseReasoningDoneStreamEvent

## Example Usage

```typescript
import { ResponseReasoningDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningDoneStreamEvent = {
  data: {
    contentIndex: 842760,
    itemId: "<id>",
    outputIndex: 366874,
    sequenceNumber: 570183,
    text: "<value>",
    type: "response.reasoning_text.done",
  },
  event: "response.reasoning.done",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                               | [components.ResponseReasoningDoneStreamEventData](../../models/components/responsereasoningdonestreameventdata.md)   | :heavy_check_mark:                                                                                                   | The event payload.                                                                                                   |
| `event`                                                                                                              | [components.ResponseReasoningDoneStreamEventEvent](../../models/components/responsereasoningdonestreameventevent.md) | :heavy_check_mark:                                                                                                   | The SSE event name, equal to the payload's `type`.                                                                   |