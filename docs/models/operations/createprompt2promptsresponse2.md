# CreatePrompt2PromptsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePrompt2PromptsResponse2 } from "@orq-ai/node/models/operations";

let value: CreatePrompt2PromptsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.CreatePrompt2PromptsResponse200Type](../../models/operations/createprompt2promptsresponse200type.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `imageUrl`                                                                                                         | [operations.CreatePrompt2PromptsResponseImageUrl](../../models/operations/createprompt2promptsresponseimageurl.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |