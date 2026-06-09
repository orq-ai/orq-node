# ResponseErrorStreamEvent

## Example Usage

```typescript
import { ResponseErrorStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseErrorStreamEvent = {
  data: {
    error: {
      code: "<value>",
      message: "<value>",
    },
    sequenceNumber: 122768,
    type: "error",
  },
  event: "error",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `data`                                                                                             | [components.ResponseErrorStreamEventData](../../models/components/responseerrorstreameventdata.md) | :heavy_check_mark:                                                                                 | The event payload.                                                                                 |
| `event`                                                                                            | *"error"*                                                                                          | :heavy_check_mark:                                                                                 | The SSE event name, equal to the payload's `type`.                                                 |