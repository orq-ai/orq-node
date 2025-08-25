# PostV2ProxyImagesGenerationsResponseBody

Represents an image generation response from the API.

## Example Usage

```typescript
import { PostV2ProxyImagesGenerationsResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesGenerationsResponseBody = {
  data: [
    {},
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `created`                                                                                                    | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [operations.PostV2ProxyImagesGenerationsData](../../models/operations/postv2proxyimagesgenerationsdata.md)[] | :heavy_check_mark:                                                                                           | Represents the url or the content of an image generated.                                                     |
| `usage`                                                                                                      | [operations.PostV2ProxyImagesGenerationsUsage](../../models/operations/postv2proxyimagesgenerationsusage.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |