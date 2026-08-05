# ResponseBody3

## Example Usage

```typescript
import { ResponseBody3 } from "@orq-ai/node/models/operations";

let value: ResponseBody3 = {
  traceId: "<id>",
  attributes: {},
  type: "span.completion",
  input: {
    model: "Roadster",
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
  },
  output: {
    id: "<id>",
    choices: [],
    model: "Roadster",
    object: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Name of the trace or block                                                                                                                   |
| `traceId`                                                                                                                                    | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Unique trace ID                                                                                                                              |
| `duration`                                                                                                                                   | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Total time elapsed between the trace start and end timestamp                                                                                 |
| `totalTokens`                                                                                                                                | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Total number of tokens used by the trace                                                                                                     |
| `totalCost`                                                                                                                                  | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Total cost of the trace                                                                                                                      |
| `billable`                                                                                                                                   | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Whether the trace is billable                                                                                                                |
| `sessionId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Unique ID to relate multiple traces together                                                                                                 |
| `context`                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyContext](../../models/operations/retrieveannotationqueueitemresponsebodycontext.md)       | :heavy_minus_sign:                                                                                                                           | Context information for the trace                                                                                                            |
| `parentId`                                                                                                                                   | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Parent trace ID, if applicable                                                                                                               |
| `startTime`                                                                                                                                  | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | ISO timestamp indicating when the trace started                                                                                              |
| `endTime`                                                                                                                                    | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | ISO timestamp indicating when the trace ended                                                                                                |
| `events`                                                                                                                                     | Record<string, *any*>[]                                                                                                                      | :heavy_minus_sign:                                                                                                                           | List of events associated with this trace                                                                                                    |
| `attributes`                                                                                                                                 | [operations.RetrieveAnnotationQueueItemResponseBodyAttributes](../../models/operations/retrieveannotationqueueitemresponsebodyattributes.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `type`                                                                                                                                       | *"span.completion"*                                                                                                                          | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `input`                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyInput](../../models/operations/retrieveannotationqueueitemresponsebodyinput.md)           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `output`                                                                                                                                     | [operations.ResponseBodyOutput](../../models/operations/responsebodyoutput.md)                                                               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |