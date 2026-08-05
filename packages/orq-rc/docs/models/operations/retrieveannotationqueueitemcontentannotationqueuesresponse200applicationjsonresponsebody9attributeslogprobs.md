# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody9AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody9AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody9AttributesLogprobs =
    {
      token: "<value>",
      logprob: 8278.17,
      bytes: [
        132413,
        879493,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 9201.42,
          bytes: [],
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
| `topLogprobs`                                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody9AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody9attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |