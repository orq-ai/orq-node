# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentLogprobs

The log probability of a token.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentLogprobs } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentLogprobs = {
  token: "<value>",
  logprob: 5799.14,
  bytes: [
    844451,
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
| `topLogprobs`                                                                                                                                                                      | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontenttoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |