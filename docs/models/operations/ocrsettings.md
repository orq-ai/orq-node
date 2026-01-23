# OcrSettings

Optional settings for the OCR run

## Example Usage

```typescript
import { OcrSettings } from "@orq-ai/node/models/operations";

let value: OcrSettings = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `includeImageBase64`                                               | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to include image Base64 in the response. Null for default. |
| `maxImagesToInclude`                                               | *number*                                                           | :heavy_minus_sign:                                                 | Maximum number of images to extract. Null for no limit.            |
| `imageMinSize`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Minimum height and width of image to extract. Null for no minimum. |