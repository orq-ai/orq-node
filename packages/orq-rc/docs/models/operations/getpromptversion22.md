# GetPromptVersion22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetPromptVersion22 } from "@orq-ai/node/models/operations";

let value: GetPromptVersion22 = {
  type: "image_url",
  imageUrl: {
    url: "https://cloudy-fireplace.biz",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.GetPromptVersion2PromptsType](../../models/operations/getpromptversion2promptstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `imageUrl`                                                                                         | [operations.GetPromptVersion2ImageUrl](../../models/operations/getpromptversion2imageurl.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |