# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200Logprobs =
    {
      token: "<value>",
      logprob: 2707.66,
      bytes: [
        44076,
        900792,
        26848,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1534.12,
          bytes: [
            324798,
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `logprob`                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `bytes`                                                                                                                                                                                                                                | *number*[]                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `topLogprobs`                                                                                                                                                                                                                          | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdContentAnnotationQueueResponse200TopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidcontentannotationqueueresponse200toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |