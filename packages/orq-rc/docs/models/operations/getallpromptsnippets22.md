# GetAllPromptSnippets22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPromptSnippets22 } from "@orq-ai/node/models/operations";

let value: GetAllPromptSnippets22 = {
  type: "image_url",
  imageUrl: {
    url: "https://alive-flint.name/",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.GetAllPromptSnippets2PromptSnippetsType](../../models/operations/getallpromptsnippets2promptsnippetstype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `imageUrl`                                                                                                               | [operations.GetAllPromptSnippets2ImageUrl](../../models/operations/getallpromptsnippets2imageurl.md)                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |