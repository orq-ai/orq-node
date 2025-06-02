# CreateDatasetItem2ImageUrl

## Example Usage

```typescript
import { CreateDatasetItem2ImageUrl } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2ImageUrl = {
  url: "https://unsightly-sprinkles.net",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | Either a URL of the image or the base64 encoded image data.                                |
| `detail`                                                                                   | [operations.CreateDatasetItem2Detail](../../models/operations/createdatasetitem2detail.md) | :heavy_minus_sign:                                                                         | Specifies the detail level of the image.                                                   |