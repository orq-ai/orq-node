# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesInputTokensDetails } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesInputTokensDetails = {
    textTokens: 7276.03,
    imageTokens: 9804.86,
  };
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |