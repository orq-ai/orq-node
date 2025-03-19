# ListDatasetDatapoints22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { ListDatasetDatapoints22 } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapoints22 = {
  type: "image_url",
  imageUrl: {
    url: "https://perfumed-safe.info/",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.ListDatasetDatapoints2DatasetsType](../../models/operations/listdatasetdatapoints2datasetstype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `imageUrl`                                                                                                     | [operations.ListDatasetDatapoints2ImageUrl](../../models/operations/listdatasetdatapoints2imageurl.md)         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |