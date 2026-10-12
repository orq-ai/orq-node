# ResponseImageGenerationCallPartialImageStreamEvent

A `response.image_generation_call.partial_image` server-sent event.

## Example Usage

```typescript
import { ResponseImageGenerationCallPartialImageStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseImageGenerationCallPartialImageStreamEvent = {
  itemId: "<id>",
  outputIndex: 491215,
  partialImageB64: "<value>",
  partialImageIndex: 529497,
  sequenceNumber: 948566,
  type: "response.image_generation_call.partial_image",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `background`                                                  | *string*                                                      | :heavy_minus_sign:                                            | Image background.                                             |
| `itemId`                                                      | *string*                                                      | :heavy_check_mark:                                            | ID of the output item this event refers to.                   |
| `outputFormat`                                                | *string*                                                      | :heavy_minus_sign:                                            | Image encoding format.                                        |
| `outputIndex`                                                 | *number*                                                      | :heavy_check_mark:                                            | Index of the output item in the response output array.        |
| `partialImageB64`                                             | *string*                                                      | :heavy_check_mark:                                            | Base64-encoded partial image.                                 |
| `partialImageIndex`                                           | *number*                                                      | :heavy_check_mark:                                            | Index of the partial image.                                   |
| `quality`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Image quality.                                                |
| `sequenceNumber`                                              | *number*                                                      | :heavy_check_mark:                                            | Monotonically increasing sequence number for ordering events. |
| `size`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Image dimensions.                                             |
| `type`                                                        | *"response.image_generation_call.partial_image"*              | :heavy_check_mark:                                            | The event type. Discriminates the payload.                    |
| `additionalProperties`                                        | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |