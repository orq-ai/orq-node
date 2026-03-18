# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInput

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInput,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInput =
    {
      input: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      model: "Wrangler",
      fallbacks: [
        {
          model: "openai/text-embedding-3-small",
        },
      ],
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
        fallbacks: [
          {
            model: "openai/gpt-4o-mini",
          },
        ],
        cache: {
          ttl: 3600,
          type: "exact_match",
        },
        retry: {
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
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

| Field                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `input`                                                                                                                                                                                                                                                      | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson4Input*                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                           | Input text to embed, encoded as a string or array of tokens.                                                                                                                                                                                                 |
| `model`                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                           | ID of the model to use                                                                                                                                                                                                                                       |
| `encodingFormat`                                                                                                                                                                                                                                             | [operations.ResponseBodyEncodingFormat](../../models/operations/responsebodyencodingformat.md)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                           | Type of the document element                                                                                                                                                                                                                                 |
| `dimensions`                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | The number of dimensions the resulting output embeddings should have.                                                                                                                                                                                        |
| `user`                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | A unique identifier representing your end-user                                                                                                                                                                                                               |
| `name`                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                                                                    |
| `fallbacks`                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyFallbacks](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyfallbacks.md)[]                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                           | Array of fallback models to use if primary model fails                                                                                                                                                                                                       |
| `retry`                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyRetry](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyretry.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                           | Retry configuration for the request                                                                                                                                                                                                                          |
| `cache`                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyCache](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodycache.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                           | Cache configuration for the request.                                                                                                                                                                                                                         |
| `loadBalancer`                                                                                                                                                                                                                                               | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyLoadBalancer*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                           | Load balancer configuration for the request.                                                                                                                                                                                                                 |
| `timeout`                                                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyTimeout](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodytimeout.md)                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                           | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                                                                           |
| `orq`                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJSONOrq](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjsonorq.md) | :heavy_minus_sign:                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                          |