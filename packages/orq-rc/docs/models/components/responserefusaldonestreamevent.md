# ResponseRefusalDoneStreamEvent

## Example Usage

```typescript
import { ResponseRefusalDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseRefusalDoneStreamEvent = {
  data: {
    contentIndex: 324363,
    itemId: "<id>",
    outputIndex: 766495,
    refusal: "<value>",
    sequenceNumber: 116206,
    type: "response.refusal.done",
  },
  event: "response.refusal.done",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | [components.ResponseRefusalDoneStreamEventData](../../models/components/responserefusaldonestreameventdata.md) | :heavy_check_mark:                                                                                             | The event payload.                                                                                             |
| `event`                                                                                                        | *"response.refusal.done"*                                                                                      | :heavy_check_mark:                                                                                             | The SSE event name, equal to the payload's `type`.                                                             |