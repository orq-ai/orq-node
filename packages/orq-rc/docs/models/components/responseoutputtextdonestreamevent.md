# ResponseOutputTextDoneStreamEvent

## Example Usage

```typescript
import { ResponseOutputTextDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputTextDoneStreamEvent = {
  data: {
    contentIndex: 255769,
    itemId: "<id>",
    logprobs: [
      {},
      {},
      {},
    ],
    outputIndex: 241295,
    sequenceNumber: 273433,
    text: "<value>",
    type: "response.output_text.done",
  },
  event: "response.output_text.done",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                               | [components.ResponseOutputTextDoneStreamEventData](../../models/components/responseoutputtextdonestreameventdata.md) | :heavy_check_mark:                                                                                                   | The event payload.                                                                                                   |
| `event`                                                                                                              | *"response.output_text.done"*                                                                                        | :heavy_check_mark:                                                                                                   | The SSE event name, equal to the payload's `type`.                                                                   |