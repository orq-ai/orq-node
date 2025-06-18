# ListDatasetDatapoints2ImageUrl

## Example Usage

```typescript
import { ListDatasetDatapoints2ImageUrl } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapoints2ImageUrl = {
  url: "https://fat-earth.org/",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Either a URL of the image or the base64 encoded image data.                                        |
| `detail`                                                                                           | [operations.ListDatasetDatapoints2Detail](../../models/operations/listdatasetdatapoints2detail.md) | :heavy_minus_sign:                                                                                 | Specifies the detail level of the image.                                                           |