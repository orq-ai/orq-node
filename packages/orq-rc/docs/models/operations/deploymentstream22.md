# DeploymentStream22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentStream22 } from "@orq-ai/node/models/operations";

let value: DeploymentStream22 = {
  type: "image_url",
  imageUrl: {
    url: "https://finished-ceramic.com",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.DeploymentStream2DeploymentsType](../../models/operations/deploymentstream2deploymentstype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `imageUrl`                                                                                                 | [operations.DeploymentStream2ImageUrl](../../models/operations/deploymentstream2imageurl.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |