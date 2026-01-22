# CreateImageVariationInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { CreateImageVariationInputTokensDetails } from "@orq-ai/node/models/operations";

let value: CreateImageVariationInputTokensDetails = {
  textTokens: 1937.71,
  imageTokens: 7369.02,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |