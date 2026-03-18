# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponseLogprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponseLogprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponseLogprobs =
    {
      token: "<value>",
      logprob: 5311.11,
      bytes: [
        517197,
        636955,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 9403.81,
          bytes: [
            119789,
            731718,
            862930,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `logprob`                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `bytes`                                                                                                                                                                                                                          | *number*[]                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `topLogprobs`                                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponseTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponsetoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |