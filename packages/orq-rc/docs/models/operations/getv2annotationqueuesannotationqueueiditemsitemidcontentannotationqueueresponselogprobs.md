# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponseLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponseLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponseLogprobs =
    {
      token: "<value>",
      logprob: 2612.7,
      bytes: [
        83455,
        742560,
      ],
      topLogprobs: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `logprob`                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `bytes`                                                                                                                                                                                                                          | *number*[]                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `topLogprobs`                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponseTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponsetoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |