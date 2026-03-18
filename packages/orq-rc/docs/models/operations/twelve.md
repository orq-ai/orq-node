# Twelve

## Example Usage

```typescript
import { Twelve } from "@orq-ai/node/models/operations";

let value: Twelve = {
  traceId: "<id>",
  attributes: {},
  type: "span.transcription",
  input: {
    model: "Explorer",
    temperature: 0.5,
    timestampGranularities: [
      "word",
      "segment",
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
    loadBalancer: {
      type: "weight_based",
      models: [],
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
    text: "<value>",
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
| `context`                                                                                                                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12Context](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson12context.md)       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Context information for the trace                                                                                                                                                                                                                                              |
| `parentId`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Parent trace ID, if applicable                                                                                                                                                                                                                                                 |
| `startTime`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | ISO timestamp indicating when the trace started                                                                                                                                                                                                                                |
| `endTime`                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | ISO timestamp indicating when the trace ended                                                                                                                                                                                                                                  |
| `events`                                                                                                                                                                                                                                                                       | Record<string, *any*>[]                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                             | List of events associated with this trace                                                                                                                                                                                                                                      |
| `attributes`                                                                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12Attributes](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson12attributes.md) | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `type`                                                                                                                                                                                                                                                                         | *"span.transcription"*                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `input`                                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12Input](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponse200applicationjson12input.md)           | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |
| `output`                                                                                                                                                                                                                                                                       | *operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson12Output*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                            |