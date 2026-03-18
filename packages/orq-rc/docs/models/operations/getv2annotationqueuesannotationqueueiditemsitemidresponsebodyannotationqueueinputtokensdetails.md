# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInputTokensDetails,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueInputTokensDetails =
    {
      textTokens: 4372.79,
      imageTokens: 1968.59,
    };
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |