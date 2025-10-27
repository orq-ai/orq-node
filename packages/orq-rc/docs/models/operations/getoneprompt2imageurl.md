# GetOnePrompt2ImageUrl

## Example Usage

```typescript
import { GetOnePrompt2ImageUrl } from "@orq-ai/node/models/operations";

let value: GetOnePrompt2ImageUrl = {
  url: "https://picsum.photos/id/1/200/300",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |                                                                                      |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            | https://picsum.photos/id/1/200/300                                                   |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |                                                                                      |