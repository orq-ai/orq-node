# Image

An image content part.

## Example Usage

```typescript
import { Image } from "@orq-ai/node/models/operations";

let value: Image = {
  type: "input_image",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `detail`                                                     | [operations.TwoDetail](../../models/operations/twodetail.md) | :heavy_minus_sign:                                           | The detail level for image understanding.                    |
| `fileId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | The ID of a previously uploaded file.                        |
| `imageUrl`                                                   | *string*                                                     | :heavy_minus_sign:                                           | The URL of the image.                                        |
| `type`                                                       | *"input_image"*                                              | :heavy_check_mark:                                           | N/A                                                          |