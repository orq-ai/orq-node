# TwoImageUrl

## Example Usage

```typescript
import { TwoImageUrl } from "@orq-ai/node/models/operations";

let value: TwoImageUrl = {
  url: "https://dependent-patroller.org",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `url`                                                       | *string*                                                    | :heavy_check_mark:                                          | Either a URL of the image or the base64 encoded image data. |
| `detail`                                                    | [operations.Detail](../../models/operations/detail.md)      | :heavy_minus_sign:                                          | Specifies the detail level of the image.                    |