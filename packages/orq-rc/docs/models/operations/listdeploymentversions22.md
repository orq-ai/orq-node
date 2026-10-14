# ListDeploymentVersions22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { ListDeploymentVersions22 } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersions22 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *"image_url"*                                                                                            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `imageUrl`                                                                                               | [operations.ListDeploymentVersions2ImageUrl](../../models/operations/listdeploymentversions2imageurl.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |