# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyInputTokensDetails } from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyInputTokensDetails =
    {
      textTokens: 840.77,
      imageTokens: 8457.95,
    };
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |