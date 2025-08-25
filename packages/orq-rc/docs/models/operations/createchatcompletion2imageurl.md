# CreateChatCompletion2ImageUrl

## Example Usage

```typescript
import { CreateChatCompletion2ImageUrl } from "@orq-ai/node/models/operations";

let value: CreateChatCompletion2ImageUrl = {
  url: "https://primary-lender.info",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | Either a URL of the image or the base64 encoded image data.                                      |
| `detail`                                                                                         | [operations.CreateChatCompletion2Detail](../../models/operations/createchatcompletion2detail.md) | :heavy_minus_sign:                                                                               | Specifies the detail level of the image.                                                         |