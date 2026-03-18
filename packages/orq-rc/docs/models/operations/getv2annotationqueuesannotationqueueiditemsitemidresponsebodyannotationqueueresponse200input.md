# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200Input

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200Input,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200Input =
    {
      model: "El Camino",
      prompt: "<value>",
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

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variables`                                                                                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyVariables](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyvariables.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `knowledgeBases`                                                                                                                                                                                                                                                         | Record<string, *any*>[]                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `retrievals`                                                                                                                                                                                                                                                             | Record<string, *any*>[]                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `model`                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                       | The model to use for image edit. [Check models](https://docs.orq.ai/docs/ai-gateway-supported-models#image-models)                                                                                                                                                       |
| `image`                                                                                                                                                                                                                                                                  | *any*                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The image(s) to edit. Must be a supported image file or an array of images.  Each image should be a png, webp, or jpg file less than 50MB. You can provide up to 16 images.                                                                                              |
| `prompt`                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                       | A text description of the desired image(s).                                                                                                                                                                                                                              |
| `n`                                                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The number of images to generate. Must be between 1 and 10.                                                                                                                                                                                                              |
| `size`                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The size of the generated images                                                                                                                                                                                                                                         |
| `quality`                                                                                                                                                                                                                                                                | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyQuality](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyquality.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The quality of the image that will be generated. Auto will automatically select the best quality for the given model.                                                                                                                                                    |
| `responseFormat`                                                                                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyResponseFormat](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyresponseformat.md)                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The format in which the generated images are returned. Some of the models only return the image in base64 format.                                                                                                                                                        |
| `user`                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | A unique identifier representing your end-user, which can help to monitor and detect abuse.                                                                                                                                                                              |
| `name`                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                                                                                |
| `fallbacks`                                                                                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseFallbacks](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponsefallbacks.md)[]                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Array of fallback models to use if primary model fails                                                                                                                                                                                                                   |
| `retry`                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseRetry](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponseretry.md)                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Retry configuration for the request                                                                                                                                                                                                                                      |
| `cache`                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseCache](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponsecache.md)                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Cache configuration for the request.                                                                                                                                                                                                                                     |
| `loadBalancer`                                                                                                                                                                                                                                                           | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseLoadBalancer*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Load balancer configuration for the request.                                                                                                                                                                                                                             |
| `timeout`                                                                                                                                                                                                                                                                | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseTimeout](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponsetimeout.md)                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                                                                                       |
| `orq`                                                                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson6InputOrq](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson6inputorq.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |