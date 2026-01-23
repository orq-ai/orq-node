# Pages

## Example Usage

```typescript
import { Pages } from "@orq-ai/node/models/operations";

let value: Pages = {
  index: 2386.11,
  markdown: "<value>",
  images: [
    {
      id: "<id>",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `index`                                                        | *number*                                                       | :heavy_check_mark:                                             | The page index in a pdf document starting from 0               |
| `markdown`                                                     | *string*                                                       | :heavy_check_mark:                                             | The markdown string response of the page                       |
| `images`                                                       | [operations.Images](../../models/operations/images.md)[]       | :heavy_check_mark:                                             | N/A                                                            |
| `dimensions`                                                   | [operations.Dimensions](../../models/operations/dimensions.md) | :heavy_minus_sign:                                             | The dimensions of the PDF Page's screenshot image              |