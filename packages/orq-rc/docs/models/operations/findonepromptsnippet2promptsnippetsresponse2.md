# FindOnePromptSnippet2PromptSnippetsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { FindOnePromptSnippet2PromptSnippetsResponse2 } from "@orq-ai/node/models/operations";

let value: FindOnePromptSnippet2PromptSnippetsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://incomparable-puppet.biz/",
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                               | [operations.FindOnePromptSnippet2PromptSnippetsResponse200ApplicationJSONResponseBodyType](../../models/operations/findonepromptsnippet2promptsnippetsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `imageUrl`                                                                                                                                                                                           | [operations.FindOnePromptSnippet2PromptSnippetsResponseImageUrl](../../models/operations/findonepromptsnippet2promptsnippetsresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |