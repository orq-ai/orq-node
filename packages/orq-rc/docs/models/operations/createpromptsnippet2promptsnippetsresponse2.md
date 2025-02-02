# CreatePromptSnippet2PromptSnippetsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePromptSnippet2PromptSnippetsResponse2 } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippet2PromptSnippetsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://best-nougat.info",
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.CreatePromptSnippet2PromptSnippetsResponse200ApplicationJSONResponseBodyType](../../models/operations/createpromptsnippet2promptsnippetsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `imageUrl`                                                                                                                                                                                         | [operations.CreatePromptSnippet2PromptSnippetsResponseImageUrl](../../models/operations/createpromptsnippet2promptsnippetsresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |