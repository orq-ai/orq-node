# RetrieveDatapoint2ImageUrl

## Example Usage

```typescript
import { RetrieveDatapoint2ImageUrl } from "@orq-ai/node/models/operations";

let value: RetrieveDatapoint2ImageUrl = {
  url: "https://abandoned-patroller.com/",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | Either a URL of the image or the base64 encoded image data.                                |
| `detail`                                                                                   | [operations.RetrieveDatapoint2Detail](../../models/operations/retrievedatapoint2detail.md) | :heavy_minus_sign:                                                                         | Specifies the detail level of the image.                                                   |