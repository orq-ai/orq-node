# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200Logprobs

The log probability of a token.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200Logprobs,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200Logprobs =
    {
      token: "<value>",
      logprob: 1837.49,
      bytes: [
        947435,
        742177,
        982638,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1214.07,
          bytes: [
            339708,
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
| `topLogprobs`                                                                                                                                                                                                                          | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200TopLogprobs](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200toplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |