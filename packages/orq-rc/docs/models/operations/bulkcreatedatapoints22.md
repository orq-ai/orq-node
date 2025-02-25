# BulkCreateDatapoints22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { BulkCreateDatapoints22 } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapoints22 = {
  type: "image_url",
  imageUrl: {
    url: "https://mild-management.info/",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.BulkCreateDatapoints2DatasetsType](../../models/operations/bulkcreatedatapoints2datasetstype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `imageUrl`                                                                                                   | [operations.BulkCreateDatapoints2ImageUrl](../../models/operations/bulkcreatedatapoints2imageurl.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |