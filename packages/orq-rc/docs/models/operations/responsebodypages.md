# ResponseBodyPages

## Example Usage

```typescript
import { ResponseBodyPages } from "@orq-ai/node/models/operations";

let value: ResponseBodyPages = {
  index: 3036.8,
  markdown: "<value>",
  images: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `index`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The page index in a pdf document starting from 0                                       |
| `markdown`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The markdown string response of the page                                               |
| `images`                                                                               | [operations.ResponseBodyImages](../../models/operations/responsebodyimages.md)[]       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | [operations.ResponseBodyDimensions](../../models/operations/responsebodydimensions.md) | :heavy_minus_sign:                                                                     | The dimensions of the PDF Page's screenshot image                                      |