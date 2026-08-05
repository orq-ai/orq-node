# RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesLogprobs =
    {
      token: "<value>",
      logprob: 7102.28,
      bytes: [
        943860,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5662.75,
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
| `topLogprobs`                                                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesTopLogprobs](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsonresponsebody7attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |