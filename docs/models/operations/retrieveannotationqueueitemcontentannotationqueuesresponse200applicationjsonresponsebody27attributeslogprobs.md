# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody27AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody27AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody27AttributesLogprobs =
    {
      token: "<value>",
      logprob: 2998.04,
      bytes: [
        158939,
        518498,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 236.89,
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
| `topLogprobs`                                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody27AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody27attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |