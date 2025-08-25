# PostV2ProxyImagesVariationsInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { PostV2ProxyImagesVariationsInputTokensDetails } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesVariationsInputTokensDetails = {
  textTokens: 7908.87,
  imageTokens: 3942.08,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |