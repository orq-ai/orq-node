# ResponseOutputTextDeltaStreamEvent

## Example Usage

```typescript
import { ResponseOutputTextDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputTextDeltaStreamEvent = {
  data: {
    contentIndex: 467304,
    delta: "<value>",
    itemId: "<id>",
    logprobs: [
      {},
    ],
    outputIndex: 775448,
    sequenceNumber: 615240,
    type: "response.output_text.delta",
  },
  event: "response.output_text.delta",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                 | [components.ResponseOutputTextDeltaStreamEventData](../../models/components/responseoutputtextdeltastreameventdata.md) | :heavy_check_mark:                                                                                                     | The event payload.                                                                                                     |
| `event`                                                                                                                | *"response.output_text.delta"*                                                                                         | :heavy_check_mark:                                                                                                     | The SSE event name, equal to the payload's `type`.                                                                     |