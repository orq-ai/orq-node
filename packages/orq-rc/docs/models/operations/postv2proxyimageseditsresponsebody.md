# PostV2ProxyImagesEditsResponseBody

Represents an image edit response from the API.

## Example Usage

```typescript
import { PostV2ProxyImagesEditsResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesEditsResponseBody = {
  created: 923.92,
  data: [
    {},
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `created`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | The Unix timestamp (in seconds) of when the image was created.                                   |
| `outputFormat`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | The output format of the image generation                                                        |
| `size`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The size of the image generated                                                                  |
| `quality`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | The quality of the image generated                                                               |
| `data`                                                                                           | [operations.PostV2ProxyImagesEditsData](../../models/operations/postv2proxyimageseditsdata.md)[] | :heavy_check_mark:                                                                               | The list of generated images.                                                                    |
| `usage`                                                                                          | [operations.PostV2ProxyImagesEditsUsage](../../models/operations/postv2proxyimageseditsusage.md) | :heavy_minus_sign:                                                                               | The token usage information for the image generation.                                            |