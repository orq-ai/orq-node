# ResponseErrorStreamEvent

A `error` server-sent event.

## Example Usage

```typescript
import { ResponseErrorStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseErrorStreamEvent = {
  error: {
    code: "<value>",
    message: "<value>",
  },
  sequenceNumber: 122768,
  type: "error",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `error`                                                              | [components.ResponseError](../../models/components/responseerror.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `sequenceNumber`                                                     | *number*                                                             | :heavy_check_mark:                                                   | Monotonically increasing sequence number for ordering events.        |
| `type`                                                               | *"error"*                                                            | :heavy_check_mark:                                                   | The event type. Discriminates the payload.                           |
| `additionalProperties`                                               | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | N/A                                                                  |