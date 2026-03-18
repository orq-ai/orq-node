# Eleven

## Example Usage

```typescript
import { Eleven } from "@orq-ai/node/models/operations";

let value: Eleven = {
  traceId: "<id>",
  attributes: {},
  type: "span.speech",
  input: {
    input: "<value>",
    model: "Altima",
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
  },
  output: {
    url: "https://boiling-deck.org",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `name`                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Name of the trace or block                                                                                                                                                                                                                                                     |
| `traceId`                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                             | Unique trace ID                                                                                                                                                                                                                                                                |
| `duration`                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Total time elapsed between the trace start and end timestamp                                                                                                                                                                                                                   |
| `sessionId`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Unique ID to relate multiple traces together                                                                                                                                                                                                                                   |
| `context`                                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson11Context](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson11context.md)       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Context information for the trace                                                                                                                                                                                                                                              |
| `parentId`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Parent trace ID, if applicable                                                                                                                                                                                                                                                 |
| `startTime`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | ISO timestamp indicating when the trace started                                                                                                                                                                                                                                |
| `endTime`                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | ISO timestamp indicating when the trace ended                                                                                                                                                                                                                                  |
| `events`                                                                                                                                                                                                                                                                       | Record<string, *any*>[]                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                             | List of events associated with this trace                                                                                                                                                                                                                                      |
| `attributes`                                                                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson11Attributes](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson11attributes.md) | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `type`                                                                                                                                                                                                                                                                         | *"span.speech"*                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `input`                                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson11Input](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson11input.md)           | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `output`                                                                                                                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson11Output](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson11output.md)         | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |