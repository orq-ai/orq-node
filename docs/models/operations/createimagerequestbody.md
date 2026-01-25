# CreateImageRequestBody

input

## Example Usage

```typescript
import { CreateImageRequestBody } from "@orq-ai/node/models/operations";

let value: CreateImageRequestBody = {
  prompt: "<value>",
  model: "Land Cruiser",
  retry: {
    onCodes: [
      429,
      500,
      502,
      503,
      504,
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
    ],
  },
  timeout: {
    callTimeout: 30000,
  },
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

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prompt`                                                                                                                                                                                | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | A text description of the desired image(s).                                                                                                                                             |
| `background`                                                                                                                                                                            | [operations.Background](../../models/operations/background.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                      | Allows to set transparency for the background of the generated image(s). This parameter is only supported for `openai/gpt-image-1`.                                                     |
| `model`                                                                                                                                                                                 | *string*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | The model to use for image generation. One of `openai/dall-e-2`, `openai/dall-e-3`, or `openai/gpt-image-1`.                                                                            |
| `moderation`                                                                                                                                                                            | [operations.Moderation](../../models/operations/moderation.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                      | Control the content-moderation level for images generated by `gpt-image-1`. Must be either `low` or `auto`.                                                                             |
| `n`                                                                                                                                                                                     | *number*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.                                                                                    |
| `outputCompression`                                                                                                                                                                     | *number*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The compression level (0-100%) for the generated images. This parameter is only supported for `gpt-image-1` with the `webp` or `jpeg` output formats.                                   |
| `outputFormat`                                                                                                                                                                          | [operations.OutputFormat](../../models/operations/outputformat.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                      | The format in which the generated images are returned. This parameter is only supported for `openai/gpt-image-1`.                                                                       |
| `quality`                                                                                                                                                                               | [operations.Quality](../../models/operations/quality.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The quality of the image that will be generated. `auto` will automatically select the best quality for the given model.                                                                 |
| `responseFormat`                                                                                                                                                                        | [operations.CreateImageResponseFormat](../../models/operations/createimageresponseformat.md)                                                                                            | :heavy_minus_sign:                                                                                                                                                                      | The format in which generated images are returned. Must be one of `url` or `b64_json`. This parameter isn't supported for `gpt-image-1` which will always return base64-encoded images. |
| `size`                                                                                                                                                                                  | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The size of the generated images. Must be one of the specified sizes for each model.                                                                                                    |
| `style`                                                                                                                                                                                 | [operations.Style](../../models/operations/style.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                      | The style of the generated images. This parameter is only supported for `openai/dall-e-3`. Must be one of `vivid` or `natural`.                                                         |
| `name`                                                                                                                                                                                  | *string*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | The name to display on the trace. If not specified, the default system name will be used.                                                                                               |
| `fallbacks`                                                                                                                                                                             | [operations.CreateImageFallbacks](../../models/operations/createimagefallbacks.md)[]                                                                                                    | :heavy_minus_sign:                                                                                                                                                                      | Array of fallback models to use if primary model fails                                                                                                                                  |
| `retry`                                                                                                                                                                                 | [operations.CreateImageRetry](../../models/operations/createimageretry.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                      | Retry configuration for the request                                                                                                                                                     |
| `cache`                                                                                                                                                                                 | [operations.CreateImageCache](../../models/operations/createimagecache.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                      | Cache configuration for the request.                                                                                                                                                    |
| `loadBalancer`                                                                                                                                                                          | *operations.CreateImageLoadBalancer*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                      | Load balancer configuration for the request.                                                                                                                                            |
| `timeout`                                                                                                                                                                               | [operations.CreateImageTimeout](../../models/operations/createimagetimeout.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                      | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                      |
| `orq`                                                                                                                                                                                   | [operations.CreateImageOrq](../../models/operations/createimageorq.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     |