# CreatePrompt2PromptsImageUrl

## Example Usage

```typescript
import { CreatePrompt2PromptsImageUrl } from "@orq-ai/node/models/operations";

let value: CreatePrompt2PromptsImageUrl = {
  url: "https://willing-decryption.net/",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | Either a URL of the image or the base64 encoded image data.                      |
| `detail`                                                                         | [operations.CreatePrompt2Detail](../../models/operations/createprompt2detail.md) | :heavy_minus_sign:                                                               | Specifies the detail level of the image.                                         |