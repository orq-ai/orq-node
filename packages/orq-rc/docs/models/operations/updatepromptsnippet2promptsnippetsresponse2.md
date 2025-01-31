# UpdatePromptSnippet2PromptSnippetsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePromptSnippet2PromptSnippetsResponse2 } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippet2PromptSnippetsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://palatable-toothpick.net/",
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.UpdatePromptSnippet2PromptSnippetsResponse200ApplicationJSONResponseBodyType](../../models/operations/updatepromptsnippet2promptsnippetsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `imageUrl`                                                                                                                                                                                         | [operations.UpdatePromptSnippet2PromptSnippetsResponseImageUrl](../../models/operations/updatepromptsnippet2promptsnippetsresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |