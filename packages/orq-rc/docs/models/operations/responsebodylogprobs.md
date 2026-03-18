# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "@orq-ai/node/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 4943.43,
      bytes: [
        9741.35,
      ],
      topLogprobs: [],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 9361.98,
      bytes: [],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5456.34,
          bytes: [],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `content`                                                                                                                                                                                                          | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueContent](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueuecontent.md)[] | :heavy_check_mark:                                                                                                                                                                                                 | A list of message content tokens with log probability information.                                                                                                                                                 |
| `refusal`                                                                                                                                                                                                          | [operations.ResponseBodyRefusal](../../models/operations/responsebodyrefusal.md)[]                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                 | A list of message refusal tokens with log probability information.                                                                                                                                                 |