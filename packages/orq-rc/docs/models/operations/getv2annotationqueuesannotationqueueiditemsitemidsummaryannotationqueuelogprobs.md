# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueLogprobs

The log probability of a token.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueLogprobs } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueLogprobs =
    {
      token: "<value>",
      logprob: 9753.21,
      bytes: [
        808467,
        422574,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 434.31,
          bytes: [
            891141,
            562737,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `logprob`                                                                                                                                                                                                        | *number*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `bytes`                                                                                                                                                                                                          | *number*[]                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `topLogprobs`                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueuetoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |