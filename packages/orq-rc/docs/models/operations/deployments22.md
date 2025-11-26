# Deployments22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { Deployments22 } from "@orq-ai/node/models/operations";

let value: Deployments22 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.Deployments2DeploymentsType](../../models/operations/deployments2deploymentstype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `imageUrl`                                                                                       | [operations.Deployments2ImageUrl](../../models/operations/deployments2imageurl.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |