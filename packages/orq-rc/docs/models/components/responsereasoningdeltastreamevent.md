# ResponseReasoningDeltaStreamEvent

## Example Usage

```typescript
import { ResponseReasoningDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseReasoningDeltaStreamEvent = {
  data: {
    contentIndex: 585374,
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 616484,
    sequenceNumber: 567813,
    type: "response.reasoning.delta",
  },
  event: "response.reasoning.delta",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                 | [components.ResponseReasoningDeltaStreamEventData](../../models/components/responsereasoningdeltastreameventdata.md)   | :heavy_check_mark:                                                                                                     | The event payload.                                                                                                     |
| `event`                                                                                                                | [components.ResponseReasoningDeltaStreamEventEvent](../../models/components/responsereasoningdeltastreameventevent.md) | :heavy_check_mark:                                                                                                     | The SSE event name, equal to the payload's `type`.                                                                     |