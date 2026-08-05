# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21AttributesLogprobs =
    {
      token: "<value>",
      logprob: 2722.48,
      bytes: [],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 2422.09,
          bytes: [
            495435,
            429271,
          ],
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
| `topLogprobs`                                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody21AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody21attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |