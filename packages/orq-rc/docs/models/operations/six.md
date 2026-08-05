# Six

## Example Usage

```typescript
import { Six } from "@orq-ai/node/models/operations";

let value: Six = {
  traceId: "<id>",
  attributes: {},
  type: "span.create_image_edit",
  input: {
    model: "XTS",
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
  },
  output: {
    created: 4866.53,
    data: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                               | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `name`                                                                                                                                                                                             | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Name of the trace or block                                                                                                                                                                         |
| `traceId`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | Unique trace ID                                                                                                                                                                                    |
| `duration`                                                                                                                                                                                         | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Total time elapsed between the trace start and end timestamp                                                                                                                                       |
| `totalTokens`                                                                                                                                                                                      | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Total number of tokens used by the trace                                                                                                                                                           |
| `totalCost`                                                                                                                                                                                        | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Total cost of the trace                                                                                                                                                                            |
| `billable`                                                                                                                                                                                         | *boolean*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                 | Whether the trace is billable                                                                                                                                                                      |
| `sessionId`                                                                                                                                                                                        | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Unique ID to relate multiple traces together                                                                                                                                                       |
| `context`                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200Context](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200context.md)       | :heavy_minus_sign:                                                                                                                                                                                 | Context information for the trace                                                                                                                                                                  |
| `parentId`                                                                                                                                                                                         | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Parent trace ID, if applicable                                                                                                                                                                     |
| `startTime`                                                                                                                                                                                        | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | ISO timestamp indicating when the trace started                                                                                                                                                    |
| `endTime`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | ISO timestamp indicating when the trace ended                                                                                                                                                      |
| `events`                                                                                                                                                                                           | Record<string, *any*>[]                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | List of events associated with this trace                                                                                                                                                          |
| `attributes`                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200Attributes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200attributes.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `type`                                                                                                                                                                                             | *"span.create_image_edit"*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `input`                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200Input](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200input.md)           | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `output`                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseOutput](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponseoutput.md)               | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |