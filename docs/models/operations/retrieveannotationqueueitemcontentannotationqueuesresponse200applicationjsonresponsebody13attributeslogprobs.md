# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesLogprobs =
    {
      token: "<value>",
      logprob: 8668.32,
      bytes: [
        790284,
        302845,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 4378.88,
          bytes: [],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |
| `logprob`                                                                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |
| `bytes`                                                                                                                                                                                                                                                                    | *number*[]                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |
| `topLogprobs`                                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody13AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody13attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |