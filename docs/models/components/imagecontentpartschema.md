# ImageContentPartSchema

An image content part

## Example Usage

```typescript
import { ImageContentPartSchema } from "@orq-ai/node/models/components";

let value: ImageContentPartSchema = {
  type: "image_url",
  imageUrl: {
    url: "https://fatal-overload.name/",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *"image_url"*                                                      | :heavy_check_mark:                                                 | N/A                                                                |
| `imageUrl`                                                         | [components.ImageUrl](../../models/components/imageurl.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `cacheControl`                                                     | [components.CacheControl](../../models/components/cachecontrol.md) | :heavy_minus_sign:                                                 | N/A                                                                |