# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11Input

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11Input,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11Input =
    {
      input: "<value>",
      model: "1",
      voice: "<value>",
      retry: {
        onCodes: [
          429,
          500,
          502,
          503,
          504,
        ],
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
        thread: {
          id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
          tags: [
            "customer-support",
            "priority-high",
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

| Field                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The text to generate audio for. The maximum length is 4096 characters                                                                                                                                                                                                                                                                       |
| `model`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | ID of the model to use                                                                                                                                                                                                                                                                                                                      |
| `voice`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                          | The voice to use. <br/><br/> Available voices for OpenAI <br/><br/> `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer` <br/><br/> Available voices for ElevenLabs <br/><br/> `aria`, `roger`, `sarah`, `laura`, `charlie`, `george`, `callum`, `river`, `liam`, `charlotte`, `alice`, `matilda`, `will`, `jessica`, `eric`, `chris`, `brian`, `daniel`, `lily`, `bill` |
| `responseFormat`                                                                                                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseResponseFormat](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponseresponseformat.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. If a format is provided but not supported by the provider, the response will be in the default format. When the provided format is not supported by the provider, the response will be in the default format.                                 |
| `speed`                                                                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The speed of the generated audio.                                                                                                                                                                                                                                                                                                           |
| `name`                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                                                                                                                                                   |
| `fallbacks`                                                                                                                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11Fallbacks](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson11fallbacks.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Array of fallback models to use if primary model fails                                                                                                                                                                                                                                                                                      |
| `retry`                                                                                                                                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11Retry](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson11retry.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Retry configuration for the request                                                                                                                                                                                                                                                                                                         |
| `loadBalancer`                                                                                                                                                                                                                                                                                                                              | *operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11LoadBalancer*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Load balancer configuration for the request.                                                                                                                                                                                                                                                                                                |
| `timeout`                                                                                                                                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11Timeout](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson11timeout.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                                                                                                                                                          |
| `orq`                                                                                                                                                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson11InputOrq](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson11inputorq.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |