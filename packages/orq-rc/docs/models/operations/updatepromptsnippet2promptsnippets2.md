# UpdatePromptSnippet2PromptSnippets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePromptSnippet2PromptSnippets2 } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippet2PromptSnippets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://sparkling-season.info",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | [operations.UpdatePromptSnippet2PromptSnippetsResponse200Type](../../models/operations/updatepromptsnippet2promptsnippetsresponse200type.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `imageUrl`                                                                                                                                   | [operations.UpdatePromptSnippet2PromptSnippetsImageUrl](../../models/operations/updatepromptsnippet2promptsnippetsimageurl.md)               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |