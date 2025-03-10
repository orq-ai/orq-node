# GetOnePrompt22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetOnePrompt22 } from "@orq-ai/node/models/operations";

let value: GetOnePrompt22 = {
  type: "image_url",
  imageUrl: {
    url: "https://deafening-stranger.com/",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.GetOnePrompt2PromptsType](../../models/operations/getoneprompt2promptstype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `imageUrl`                                                                                 | [operations.GetOnePrompt2ImageUrl](../../models/operations/getoneprompt2imageurl.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |