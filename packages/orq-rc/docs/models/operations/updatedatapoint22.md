# UpdateDatapoint22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdateDatapoint22 } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint22 = {
  type: "image_url",
  imageUrl: {
    url: "https://simplistic-igloo.net/",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.UpdateDatapoint2DatasetsType](../../models/operations/updatedatapoint2datasetstype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `imageUrl`                                                                                         | [operations.UpdateDatapoint2ImageUrl](../../models/operations/updatedatapoint2imageurl.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |