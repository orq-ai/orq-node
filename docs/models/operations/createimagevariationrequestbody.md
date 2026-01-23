# CreateImageVariationRequestBody

input

## Example Usage

```typescript
import { CreateImageVariationRequestBody } from "@orq-ai/node/models/operations";

let value: CreateImageVariationRequestBody = {
  model: "Sentra",
  orq: {
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    prompt: {
      id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      version: "latest",
    },
    identity: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    contact: {
      id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      displayName: "Jane Doe",
      email: "jane.doe@example.com",
      metadata: [
        {
          "department": "Engineering",
          "role": "Senior Developer",
        },
      ],
      logoUrl: "https://example.com/avatars/jane-doe.jpg",
      tags: [
        "hr",
        "engineering",
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          model: "anthropic/claude-3-5-sonnet",
          weight: 0.3,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
  },
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `image`                                                                                                                                                           | *any*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                | The image to edit. Must be a supported image file. It should be a png, webp, or jpg file less than 50MB.                                                          |
| `model`                                                                                                                                                           | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The model to use for image generation.                                                                                                                            |
| `n`                                                                                                                                                               | *number*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The number of images to generate. Must be between 1 and 10.                                                                                                       |
| `responseFormat`                                                                                                                                                  | [operations.CreateImageVariationResponseFormat](../../models/operations/createimagevariationresponseformat.md)                                                    | :heavy_minus_sign:                                                                                                                                                | The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated. |
| `size`                                                                                                                                                            | [operations.Size](../../models/operations/size.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                | The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.                                                                            |
| `user`                                                                                                                                                            | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | A unique identifier representing your end-user, which can help to monitor and detect abuse.                                                                       |
| `orq`                                                                                                                                                             | [operations.CreateImageVariationOrq](../../models/operations/createimagevariationorq.md)                                                                          | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |