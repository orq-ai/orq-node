# CreateDatasetItem2Datasets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreateDatasetItem2Datasets2 } from "@orq-ai/node/models/operations";

let value: CreateDatasetItem2Datasets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://raw-viability.name",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.CreateDatasetItem2DatasetsResponse200Type](../../models/operations/createdatasetitem2datasetsresponse200type.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `imageUrl`                                                                                                                   | [operations.CreateDatasetItem2DatasetsImageUrl](../../models/operations/createdatasetitem2datasetsimageurl.md)               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |