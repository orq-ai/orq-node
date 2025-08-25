# PostV2ProxyImagesVariationsResponseBody

Represents an image variation response from the API.

## Example Usage

```typescript
import { PostV2ProxyImagesVariationsResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesVariationsResponseBody = {
  created: 8290.21,
  data: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                  | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The Unix timestamp (in seconds) of when the image was created.                                             |
| `outputFormat`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The output format of the image generation                                                                  |
| `size`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The size of the image generated                                                                            |
| `quality`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The quality of the image generated                                                                         |
| `data`                                                                                                     | [operations.PostV2ProxyImagesVariationsData](../../models/operations/postv2proxyimagesvariationsdata.md)[] | :heavy_check_mark:                                                                                         | The list of generated images.                                                                              |
| `usage`                                                                                                    | [operations.PostV2ProxyImagesVariationsUsage](../../models/operations/postv2proxyimagesvariationsusage.md) | :heavy_minus_sign:                                                                                         | The token usage information for the image generation.                                                      |