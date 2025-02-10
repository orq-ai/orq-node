# GetAllPrompts2Prompts2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPrompts2Prompts2 } from "@orq-ai/node/models/operations";

let value: GetAllPrompts2Prompts2 = {
  type: "image_url",
  imageUrl: {
    url: "https://pink-verve.com",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.GetAllPrompts2PromptsResponse200Type](../../models/operations/getallprompts2promptsresponse200type.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `imageUrl`                                                                                                         | [operations.GetAllPrompts2PromptsImageUrl](../../models/operations/getallprompts2promptsimageurl.md)               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |