# UpdateDatapoint2ImageUrl

## Example Usage

```typescript
import { UpdateDatapoint2ImageUrl } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2ImageUrl = {
  url: "https://abandoned-silk.biz/",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | Either a URL of the image or the base64 encoded image data.                            |
| `detail`                                                                               | [operations.UpdateDatapoint2Detail](../../models/operations/updatedatapoint2detail.md) | :heavy_minus_sign:                                                                     | Specifies the detail level of the image.                                               |