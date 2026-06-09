# ResponseImageGenerationPartialImageStreamEvent

## Example Usage

```typescript
import { ResponseImageGenerationPartialImageStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseImageGenerationPartialImageStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 925050,
    partialImageB64: "<value>",
    partialImageIndex: 249921,
    sequenceNumber: 527563,
    type: "response.image_generation_call.partial_image",
  },
  event: "response.image_generation_call.partial_image",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                         | [components.ResponseImageGenerationPartialImageStreamEventData](../../models/components/responseimagegenerationpartialimagestreameventdata.md) | :heavy_check_mark:                                                                                                                             | The event payload.                                                                                                                             |
| `event`                                                                                                                                        | *"response.image_generation_call.partial_image"*                                                                                               | :heavy_check_mark:                                                                                                                             | The SSE event name, equal to the payload's `type`.                                                                                             |