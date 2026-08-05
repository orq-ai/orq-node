# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody32Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody32Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody32Logprobs =
    {
      token: "<value>",
      logprob: 8290.56,
      bytes: [
        897317,
        616589,
        676407,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6609.03,
          bytes: [
            620607,
            819451,
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
| `topLogprobs`                                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody32TopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody32toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                    |