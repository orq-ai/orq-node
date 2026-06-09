# ResponseImageGenerationPartialImageStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseImageGenerationPartialImageStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseImageGenerationPartialImageStreamEventData = {
  itemId: "<id>",
  outputIndex: 475865,
  partialImageB64: "<value>",
  partialImageIndex: 339865,
  sequenceNumber: 475849,
  type: "response.image_generation_call.partial_image",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `itemId`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | ID of the output item this event refers to.                                                                                                    |
| `outputIndex`                                                                                                                                  | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Index of the output item in the response output array.                                                                                         |
| `partialImageB64`                                                                                                                              | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Base64-encoded partial image.                                                                                                                  |
| `partialImageIndex`                                                                                                                            | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Index of the partial image.                                                                                                                    |
| `sequenceNumber`                                                                                                                               | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Monotonically increasing sequence number for ordering events.                                                                                  |
| `type`                                                                                                                                         | [components.ResponseImageGenerationPartialImageStreamEventType](../../models/components/responseimagegenerationpartialimagestreameventtype.md) | :heavy_check_mark:                                                                                                                             | The event type. Matches the SSE `event` field.                                                                                                 |
| `additionalProperties`                                                                                                                         | Record<string, *any*>                                                                                                                          | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |