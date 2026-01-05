# CreateImageData

## Example Usage

```typescript
import { CreateImageData } from "@orq-ai/node/models/operations";

let value: CreateImageData = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `revisedPrompt`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | The prompt that was used to generate the image, if there was any revision to the prompt. |
| `b64Json`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The base64-encoded JSON of the generated image, if `response_format` is `b64_json`       |
| `url`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | The url of the generated image, if `response_format` is `url` (default)                  |