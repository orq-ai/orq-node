# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody18AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody18AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody18AttributesLogprobs =
    {
      token: "<value>",
      logprob: 4252.79,
      bytes: [],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 9125.49,
          bytes: [
            983926,
            534574,
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
| `topLogprobs`                                                                                                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody18AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody18attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                        |