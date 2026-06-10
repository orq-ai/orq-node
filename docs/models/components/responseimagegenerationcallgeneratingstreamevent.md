# ResponseImageGenerationCallGeneratingStreamEvent

A `response.image_generation_call.generating` server-sent event.

## Example Usage

```typescript
import { ResponseImageGenerationCallGeneratingStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseImageGenerationCallGeneratingStreamEvent = {
  itemId: "<id>",
  outputIndex: 180450,
  sequenceNumber: 552384,
  type: "response.image_generation_call.generating",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `type`                                                        | *"response.image_generation_call.generating"*                 | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |