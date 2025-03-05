# ImageUrl

## Example Usage

```typescript
import { ImageUrl } from "@orq-ai/node/models/operations";

let value: ImageUrl = {
  url: "https://general-guacamole.biz",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `url`                                                       | *string*                                                    | :heavy_check_mark:                                          | Either a URL of the image or the base64 encoded image data. |
| `detail`                                                    | [operations.Detail](../../models/operations/detail.md)      | :heavy_minus_sign:                                          | Specifies the detail level of the image.                    |