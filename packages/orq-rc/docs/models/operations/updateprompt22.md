# UpdatePrompt22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt22 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt22 = {
  type: "image_url",
  imageUrl: {
    url: "https://specific-reservation.org/",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.UpdatePrompt2PromptsType](../../models/operations/updateprompt2promptstype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `imageUrl`                                                                                 | [operations.UpdatePrompt2ImageUrl](../../models/operations/updateprompt2imageurl.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |