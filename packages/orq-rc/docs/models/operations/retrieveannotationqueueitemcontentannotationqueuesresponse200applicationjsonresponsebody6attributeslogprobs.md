# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6AttributesLogprobs =
    {
      token: "<value>",
      logprob: 4079.37,
      bytes: [
        911072,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 3859.32,
          bytes: [
            553198,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `logprob`                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `bytes`                                                                                                                                                                                                                                                                  | *number*[]                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `topLogprobs`                                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody6AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody6attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |