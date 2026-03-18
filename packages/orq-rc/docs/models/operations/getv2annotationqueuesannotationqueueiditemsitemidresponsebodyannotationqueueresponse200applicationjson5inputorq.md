# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5InputOrq

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5InputOrq,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5InputOrq =
    {
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
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                           | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                                                                                    |                                                                                                                                                                                                                                                                              |
| `retry`                                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5Retry](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson5retry.md)           | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Retry configuration for the request                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                              |
| `fallbacks`                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5Fallbacks](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson5fallbacks.md)[] | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Array of fallback models to use if primary model fails                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                              |
| `identity`                                                                                                                                                                                                                                                                   | [components.PublicIdentity](../../models/components/publicidentity.md)                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Information about the identity making the request. If the identity does not exist, it will be created automatically.                                                                                                                                                         |                                                                                                                                                                                                                                                                              |
| ~~`contact`~~                                                                                                                                                                                                                                                                | [components.PublicContact](../../models/components/publiccontact.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>@deprecated Use identity instead. Information about the contact making the request.                                                         |                                                                                                                                                                                                                                                                              |
| `cache`                                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5Cache](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson5cache.md)           | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Cache configuration for the request.                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                              |
| `loadBalancer`                                                                                                                                                                                                                                                               | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5LoadBalancer*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Array of models with weights for load balancing requests                                                                                                                                                                                                                     | {<br/>"type": "weight_based",<br/>"models": [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]<br/>}                                                                             |
| `timeout`                                                                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson5Timeout](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson5timeout.md)       | :heavy_minus_sign:                                                                                                                                                                                                                                                           | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                                                                                           |                                                                                                                                                                                                                                                                              |