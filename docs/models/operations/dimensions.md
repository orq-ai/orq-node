# Dimensions

The dimensions of the PDF Page's screenshot image

## Example Usage

```typescript
import { Dimensions } from "@orq-ai/node/models/operations";

let value: Dimensions = {
  dpi: 147702,
  height: 158789,
  width: 456689,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `dpi`                           | *number*                        | :heavy_check_mark:              | Dots per inch of the page-image |
| `height`                        | *number*                        | :heavy_check_mark:              | Height of the image in pixels   |
| `width`                         | *number*                        | :heavy_check_mark:              | Width of the image in pixels    |