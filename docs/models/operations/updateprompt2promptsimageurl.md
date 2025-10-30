# UpdatePrompt2PromptsImageUrl

## Example Usage

```typescript
import { UpdatePrompt2PromptsImageUrl } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsImageUrl = {
  url: "https://bouncy-lashes.net",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `url`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | Either a URL of the image or the base64 encoded image data.                      |
| `detail`                                                                         | [operations.UpdatePrompt2Detail](../../models/operations/updateprompt2detail.md) | :heavy_minus_sign:                                                               | Specifies the detail level of the image.                                         |