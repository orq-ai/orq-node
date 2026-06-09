# ResponseRefusalDeltaStreamEvent

## Example Usage

```typescript
import { ResponseRefusalDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseRefusalDeltaStreamEvent = {
  data: {
    contentIndex: 945677,
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 703349,
    sequenceNumber: 665795,
    type: "response.refusal.delta",
  },
  event: "response.refusal.delta",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [components.ResponseRefusalDeltaStreamEventData](../../models/components/responserefusaldeltastreameventdata.md) | :heavy_check_mark:                                                                                               | The event payload.                                                                                               |
| `event`                                                                                                          | *"response.refusal.delta"*                                                                                       | :heavy_check_mark:                                                                                               | The SSE event name, equal to the payload's `type`.                                                               |