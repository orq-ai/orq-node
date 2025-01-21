# FindOnePromptSnippet2PromptSnippets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { FindOnePromptSnippet2PromptSnippets2 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippet2PromptSnippets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://punctual-minister.name",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.FindOnePromptSnippet2PromptSnippetsResponse200Type](../../models/operations/findonepromptsnippet2promptsnippetsresponse200type.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `imageUrl`                                                                                                                                     | [operations.FindOnePromptSnippet2PromptSnippetsImageUrl](../../models/operations/findonepromptsnippet2promptsnippetsimageurl.md)               | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |