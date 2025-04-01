# TwoImageUrl

## Example Usage

```typescript
import { TwoImageUrl } from "@orq-ai/node/models/components";

let value: TwoImageUrl = {
  url: "https://inexperienced-heroine.org",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | Either a URL of the image or the base64 encoded image data.  |
| `detail`                                                     | [components.TwoDetail](../../models/components/twodetail.md) | :heavy_minus_sign:                                           | Specifies the detail level of the image.                     |