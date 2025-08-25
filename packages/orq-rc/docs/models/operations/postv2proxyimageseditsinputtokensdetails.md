# PostV2ProxyImagesEditsInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { PostV2ProxyImagesEditsInputTokensDetails } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesEditsInputTokensDetails = {
  textTokens: 2521.66,
  imageTokens: 7771.55,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |