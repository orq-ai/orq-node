# ResponseImageGenerationCallInProgressStreamEvent

A `response.image_generation_call.in_progress` server-sent event.

## Example Usage

```typescript
import { ResponseImageGenerationCallInProgressStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseImageGenerationCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 859020,
  sequenceNumber: 228046,
  type: "response.image_generation_call.in_progress",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.image_generation_call.in_progress"*                | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |