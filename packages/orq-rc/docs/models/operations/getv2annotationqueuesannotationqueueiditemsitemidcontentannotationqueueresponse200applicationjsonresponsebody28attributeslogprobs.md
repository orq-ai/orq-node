# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody28AttributesLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody28AttributesLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody28AttributesLogprobs =
    {
      token: "<value>",
      logprob: 6907.05,
      bytes: [
        658183,
        307840,
        714343,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 4353.95,
          bytes: [
            198402,
            776154,
            93602,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                  |
| `logprob`                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                  |
| `bytes`                                                                                                                                                                                                                                                                                                              | *number*[]                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                  |
| `topLogprobs`                                                                                                                                                                                                                                                                                                        | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200ApplicationJSONResponseBody28AttributesTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200applicationjsonresponsebody28attributestoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                  |