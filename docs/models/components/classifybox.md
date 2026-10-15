# ClassifyBox

## Example Usage

```typescript
import { ClassifyBox } from "@orq-ai/node/models/components";

let value: ClassifyBox = {
  bottom: 8623.73,
  left: 5052.74,
  right: 8.68,
  top: 4476.78,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `bottom`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | Distance of the bottom edge from the top of the image, as a fraction of the image height. |
| `left`                                                                                    | *number*                                                                                  | :heavy_check_mark:                                                                        | Distance of the left edge from the left of the image, as a fraction of the image width.   |
| `right`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | Distance of the right edge from the left of the image, as a fraction of the image width.  |
| `top`                                                                                     | *number*                                                                                  | :heavy_check_mark:                                                                        | Distance of the top edge from the top of the image, as a fraction of the image height.    |