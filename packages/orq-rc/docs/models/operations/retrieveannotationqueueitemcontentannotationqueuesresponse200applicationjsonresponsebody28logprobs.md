# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody28Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody28Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody28Logprobs =
    {
      token: "<value>",
      logprob: 2565.32,
      bytes: [],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 4710.56,
          bytes: [
            114427,
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
| `topLogprobs`                                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody28TopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody28toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |