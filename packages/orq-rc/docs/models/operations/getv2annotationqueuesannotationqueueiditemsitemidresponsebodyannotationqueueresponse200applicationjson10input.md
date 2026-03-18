# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10Input

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10Input,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10Input =
    {
      query: "<value>",
      documents: [],
      model: "Durango",
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

| Field                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                         | The search query                                                                                                                                                                                                                                                           |
| `documents`                                                                                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                         | A list of texts that will be compared to the `query`. For optimal performance we recommend against sending more than 1,000 documents in a single request.                                                                                                                  |
| `model`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                         | The identifier of the model to use                                                                                                                                                                                                                                         |
| `topN`                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                         | The number of most relevant documents or indices to return, defaults to the length of the documents                                                                                                                                                                        |
| `filename`                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                         | The filename of the document to rerank                                                                                                                                                                                                                                     |
| `name`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                         | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                                                                                  |
| `fallbacks`                                                                                                                                                                                                                                                                | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJSONFallbacks](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjsonfallbacks.md)[] | :heavy_minus_sign:                                                                                                                                                                                                                                                         | Array of fallback models to use if primary model fails                                                                                                                                                                                                                     |
| `retry`                                                                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJSONRetry](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjsonretry.md)           | :heavy_minus_sign:                                                                                                                                                                                                                                                         | Retry configuration for the request                                                                                                                                                                                                                                        |
| `cache`                                                                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJSONCache](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjsoncache.md)           | :heavy_minus_sign:                                                                                                                                                                                                                                                         | Cache configuration for the request.                                                                                                                                                                                                                                       |
| `loadBalancer`                                                                                                                                                                                                                                                             | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJSONLoadBalancer*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                         | Load balancer configuration for the request.                                                                                                                                                                                                                               |
| `timeout`                                                                                                                                                                                                                                                                  | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJSONTimeout](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjsontimeout.md)       | :heavy_minus_sign:                                                                                                                                                                                                                                                         | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                                                                                         |
| `orq`                                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson10InputOrq](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson10inputorq.md) | :heavy_minus_sign:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |