# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueLogprobs

The log probability of a token.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueLogprobs } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueLogprobs =
    {
      token: "<value>",
      logprob: 8495.1,
      bytes: [
        245598,
        517983,
      ],
      topLogprobs: [],
    };
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `logprob`                                                                                                                                                                                                        | *number*                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `bytes`                                                                                                                                                                                                          | *number*[]                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `topLogprobs`                                                                                                                                                                                                    | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueTopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueuetoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |