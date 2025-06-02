# CreateDatasetItem2DatasetsImageUrl

## Example Usage

```typescript
import { CreateDatasetItem2DatasetsImageUrl } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2DatasetsImageUrl = {
  url: "https://lumpy-spear.name/",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Either a URL of the image or the base64 encoded image data.                                                |
| `detail`                                                                                                   | [operations.CreateDatasetItem2DatasetsDetail](../../models/operations/createdatasetitem2datasetsdetail.md) | :heavy_minus_sign:                                                                                         | Specifies the detail level of the image.                                                                   |