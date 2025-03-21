# UpdateDatapoint2Datasets2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdateDatapoint2Datasets2 } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2Datasets2 = {
  type: "image_url",
  imageUrl: {
    url: "https://anguished-experience.name",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.UpdateDatapoint2DatasetsResponse200Type](../../models/operations/updatedatapoint2datasetsresponse200type.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `imageUrl`                                                                                                               | [operations.UpdateDatapoint2DatasetsImageUrl](../../models/operations/updatedatapoint2datasetsimageurl.md)               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |