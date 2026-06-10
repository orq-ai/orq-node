# ResponseImageGenerationCallCompletedStreamEvent

A `response.image_generation_call.completed` server-sent event.

## Example Usage

```typescript
import { ResponseImageGenerationCallCompletedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseImageGenerationCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 269175,
  sequenceNumber: 844915,
  type: "response.image_generation_call.completed",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.image_generation_call.completed"*                  | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |