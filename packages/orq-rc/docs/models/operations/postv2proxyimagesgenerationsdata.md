# PostV2ProxyImagesGenerationsData

## Example Usage

```typescript
import { PostV2ProxyImagesGenerationsData } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesGenerationsData = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `revisedPrompt`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | The prompt that was used to generate the image, if there was any revision to the prompt. |
| `b64Json`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The base64-encoded JSON of the generated image, if `response_format` is `b64_json`       |
| `url`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | The url of the generated image, if `response_format` is `url` (default)                  |