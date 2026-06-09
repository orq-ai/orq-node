# ResponseOutputItemStreamEvent

## Example Usage

```typescript
import { ResponseOutputItemStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseOutputItemStreamEvent = {
  data: {
    item: {},
    outputIndex: 118357,
    sequenceNumber: 486673,
    type: "response.output_item.done",
  },
  event: "response.output_item.added",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | [components.ResponseOutputItemStreamEventData](../../models/components/responseoutputitemstreameventdata.md)   | :heavy_check_mark:                                                                                             | The event payload.                                                                                             |
| `event`                                                                                                        | [components.ResponseOutputItemStreamEventEvent](../../models/components/responseoutputitemstreameventevent.md) | :heavy_check_mark:                                                                                             | The SSE event name, equal to the payload's `type`.                                                             |