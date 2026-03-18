# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryLogprobs

The log probability of a token.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryLogprobs } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryLogprobs = {
  token: "<value>",
  logprob: 3596.05,
  bytes: [
    484527,
    284090,
    654485,
  ],
  topLogprobs: [],
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                            | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `logprob`                                                                                                                                                                          | *number*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `bytes`                                                                                                                                                                            | *number*[]                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `topLogprobs`                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummarytoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |