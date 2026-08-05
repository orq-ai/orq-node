# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody33Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody33Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody33Logprobs =
    {
      token: "<value>",
      logprob: 1064.57,
      bytes: [
        391033,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6910.94,
          bytes: [
            726962,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |
| `logprob`                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |
| `bytes`                                                                                                                                                                                                                                                | *number*[]                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |
| `topLogprobs`                                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody33TopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody33toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |