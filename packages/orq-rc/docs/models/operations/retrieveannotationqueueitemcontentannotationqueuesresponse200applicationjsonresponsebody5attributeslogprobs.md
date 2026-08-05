# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesLogprobs =
    {
      token: "<value>",
      logprob: 2548.89,
      bytes: [
        952986,
        661697,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6666.57,
          bytes: [
            418355,
            747680,
            457890,
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
| `topLogprobs`                                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody5AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody5attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |