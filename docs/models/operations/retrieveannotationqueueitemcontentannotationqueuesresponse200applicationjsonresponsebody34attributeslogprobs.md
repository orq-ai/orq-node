# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody34AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody34AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody34AttributesLogprobs =
    {
      token: "<value>",
      logprob: 1705.44,
      bytes: [
        30220,
        137763,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 7649.39,
          bytes: [
            218543,
            41978,
            458392,
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
| `topLogprobs`                                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody34AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody34attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |