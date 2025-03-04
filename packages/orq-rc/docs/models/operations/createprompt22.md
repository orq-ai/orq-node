# CreatePrompt22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePrompt22 } from "@orq-ai/node/models/operations";

let value: CreatePrompt22 = {
  type: "image_url",
  imageUrl: {
    url: "https://celebrated-metabolite.biz/",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.CreatePrompt2PromptsType](../../models/operations/createprompt2promptstype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `imageUrl`                                                                                 | [operations.CreatePrompt2ImageUrl](../../models/operations/createprompt2imageurl.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |