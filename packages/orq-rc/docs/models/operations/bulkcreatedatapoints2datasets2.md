# BulkCreateDatapoints2Datasets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { BulkCreateDatapoints2Datasets2 } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapoints2Datasets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://burdensome-kettledrum.net/",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.BulkCreateDatapoints2DatasetsResponse200Type](../../models/operations/bulkcreatedatapoints2datasetsresponse200type.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `imageUrl`                                                                                                                         | [operations.BulkCreateDatapoints2DatasetsImageUrl](../../models/operations/bulkcreatedatapoints2datasetsimageurl.md)               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |