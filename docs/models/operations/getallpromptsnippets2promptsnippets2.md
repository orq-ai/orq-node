# GetAllPromptSnippets2PromptSnippets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPromptSnippets2PromptSnippets2 } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippets2PromptSnippets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://vague-someplace.org",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.GetAllPromptSnippets2PromptSnippetsResponse200Type](../../models/operations/getallpromptsnippets2promptsnippetsresponse200type.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `imageUrl`                                                                                                                                     | [operations.GetAllPromptSnippets2PromptSnippetsImageUrl](../../models/operations/getallpromptsnippets2promptsnippetsimageurl.md)               | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |