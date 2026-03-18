# ResponseBodyDimensions

The dimensions of the PDF Page's screenshot image

## Example Usage

```typescript
import { ResponseBodyDimensions } from "@orq-ai/node/models/operations";

let value: ResponseBodyDimensions = {
  dpi: 35916,
  height: 24135,
  width: 910068,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `dpi`                           | *number*                        | :heavy_check_mark:              | Dots per inch of the page-image |
| `height`                        | *number*                        | :heavy_check_mark:              | Height of the image in pixels   |
| `width`                         | *number*                        | :heavy_check_mark:              | Width of the image in pixels    |