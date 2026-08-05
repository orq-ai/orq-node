# RetrieveAnnotationQueueItemResponseBodyInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyInputTokensDetails } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyInputTokensDetails = {
  textTokens: 1244.45,
  imageTokens: 9893.13,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |