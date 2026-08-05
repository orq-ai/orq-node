# RetrieveAnnotationQueueItemResponseBody2

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBody2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBody2 = {
  traceId: "<id>",
  attributes: {},
  type: "span.chat_completion",
  input: {
    messages: [],
    model: "Grand Cherokee",
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    retry: {
      count: 3,
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
        {
          model: "anthropic/claude-3-5-sonnet",
          weight: 0.3,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    stream: true,
  },
  output: {
    id: "<id>",
    choices: [],
    created: 5597.93,
    model: "Jetta",
    object: "chat.completion",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the trace or block                                                             |
| `traceId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Unique trace ID                                                                        |
| `duration`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | Total time elapsed between the trace start and end timestamp                           |
| `totalTokens`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | Total number of tokens used by the trace                                               |
| `totalCost`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | Total cost of the trace                                                                |
| `billable`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether the trace is billable                                                          |
| `sessionId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique ID to relate multiple traces together                                           |
| `context`                                                                              | [operations.ResponseBodyContext](../../models/operations/responsebodycontext.md)       | :heavy_minus_sign:                                                                     | Context information for the trace                                                      |
| `parentId`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Parent trace ID, if applicable                                                         |
| `startTime`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | ISO timestamp indicating when the trace started                                        |
| `endTime`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | ISO timestamp indicating when the trace ended                                          |
| `events`                                                                               | Record<string, *any*>[]                                                                | :heavy_minus_sign:                                                                     | List of events associated with this trace                                              |
| `attributes`                                                                           | [operations.ResponseBodyAttributes](../../models/operations/responsebodyattributes.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"span.chat_completion"*                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `input`                                                                                | *operations.ResponseBodyInput*                                                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `output`                                                                               | [operations.Output](../../models/operations/output.md)                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |