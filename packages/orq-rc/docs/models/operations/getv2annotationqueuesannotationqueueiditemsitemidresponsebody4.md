# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody4

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody4 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBody4 = {
  traceId: "<id>",
  attributes: {},
  type: "span.embedding",
  input: {
    input: "<value>",
    model: "Roadster",
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
  },
  output: {
    object: "list",
    data: [],
    model: "Expedition",
    usage: {
      promptTokens: 5077.06,
      totalTokens: 8561.95,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `name`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Name of the trace or block                                                                                                                                                                                             |
| `traceId`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | Unique trace ID                                                                                                                                                                                                        |
| `duration`                                                                                                                                                                                                             | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Total time elapsed between the trace start and end timestamp                                                                                                                                                           |
| `sessionId`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Unique ID to relate multiple traces together                                                                                                                                                                           |
| `context`                                                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueContext](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueuecontext.md)       | :heavy_minus_sign:                                                                                                                                                                                                     | Context information for the trace                                                                                                                                                                                      |
| `parentId`                                                                                                                                                                                                             | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Parent trace ID, if applicable                                                                                                                                                                                         |
| `startTime`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | ISO timestamp indicating when the trace started                                                                                                                                                                        |
| `endTime`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | ISO timestamp indicating when the trace ended                                                                                                                                                                          |
| `events`                                                                                                                                                                                                               | Record<string, *any*>[]                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                     | List of events associated with this trace                                                                                                                                                                              |
| `attributes`                                                                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueAttributes](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueattributes.md) | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `type`                                                                                                                                                                                                                 | *"span.embedding"*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `input`                                                                                                                                                                                                                | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInput](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueinput.md)           | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `output`                                                                                                                                                                                                               | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueOutput](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueoutput.md)         | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |