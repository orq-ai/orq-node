# ResponseErrorStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseErrorStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseErrorStreamEventData = {
  error: {
    code: "<value>",
    message: "<value>",
  },
  sequenceNumber: 152922,
  type: "error",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `error`                                                                                            | [components.ResponseError](../../models/components/responseerror.md)                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sequenceNumber`                                                                                   | *number*                                                                                           | :heavy_check_mark:                                                                                 | Monotonically increasing sequence number for ordering events.                                      |
| `type`                                                                                             | [components.ResponseErrorStreamEventType](../../models/components/responseerrorstreameventtype.md) | :heavy_check_mark:                                                                                 | The event type. Matches the SSE `event` field.                                                     |
| `additionalProperties`                                                                             | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |