# ResponseContentPartStreamEvent

## Example Usage

```typescript
import { ResponseContentPartStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseContentPartStreamEvent = {
  data: {
    contentIndex: 142603,
    itemId: "<id>",
    outputIndex: 32631,
    part: {},
    sequenceNumber: 44653,
    type: "response.content_part.done",
  },
  event: "response.content_part.added",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [components.ResponseContentPartStreamEventData](../../models/components/responsecontentpartstreameventdata.md)   | :heavy_check_mark:                                                                                               | The event payload.                                                                                               |
| `event`                                                                                                          | [components.ResponseContentPartStreamEventEvent](../../models/components/responsecontentpartstreameventevent.md) | :heavy_check_mark:                                                                                               | The SSE event name, equal to the payload's `type`.                                                               |