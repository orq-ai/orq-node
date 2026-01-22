# CreateImageEditInputTokensDetails

The input tokens detailed information for the image generation.

## Example Usage

```typescript
import { CreateImageEditInputTokensDetails } from "@orq-ai/node/models/operations";

let value: CreateImageEditInputTokensDetails = {
  textTokens: 7097.58,
  imageTokens: 7893.47,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `textTokens`                                    | *number*                                        | :heavy_check_mark:                              | The number of text tokens in the input prompt.  |
| `imageTokens`                                   | *number*                                        | :heavy_check_mark:                              | The number of image tokens in the input prompt. |