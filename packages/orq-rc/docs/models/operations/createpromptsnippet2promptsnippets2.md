# CreatePromptSnippet2PromptSnippets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePromptSnippet2PromptSnippets2 } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippet2PromptSnippets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://impassioned-zen.info",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | [operations.CreatePromptSnippet2PromptSnippetsResponse200Type](../../models/operations/createpromptsnippet2promptsnippetsresponse200type.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `imageUrl`                                                                                                                                   | [operations.CreatePromptSnippet2PromptSnippetsImageUrl](../../models/operations/createpromptsnippet2promptsnippetsimageurl.md)               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |