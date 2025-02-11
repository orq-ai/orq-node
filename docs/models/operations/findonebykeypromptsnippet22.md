# FindOneByKeyPromptSnippet22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { FindOneByKeyPromptSnippet22 } from "@orq-ai/node/models/operations";

let value: FindOneByKeyPromptSnippet22 = {
  type: "image_url",
  imageUrl: {
    url: "https://husky-swordfish.com/",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.FindOneByKeyPromptSnippet2PromptSnippetsType](../../models/operations/findonebykeypromptsnippet2promptsnippetstype.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `imageUrl`                                                                                                                         | [operations.FindOneByKeyPromptSnippet2ImageUrl](../../models/operations/findonebykeypromptsnippet2imageurl.md)                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |