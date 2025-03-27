# ImageUrl

## Example Usage

```typescript
import { ImageUrl } from "@orq-ai/node/models/components";

let value: ImageUrl = {
  url: "https://carefree-scorn.net/",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `url`                                                       | *string*                                                    | :heavy_check_mark:                                          | Either a URL of the image or the base64 encoded image data. |
| `detail`                                                    | [components.Detail](../../models/components/detail.md)      | :heavy_minus_sign:                                          | Specifies the detail level of the image.                    |