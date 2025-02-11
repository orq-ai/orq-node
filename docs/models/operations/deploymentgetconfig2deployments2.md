# DeploymentGetConfig2Deployments2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentGetConfig2Deployments2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig2Deployments2 = {
  type: "image_url",
  imageUrl: {
    url: "https://trustworthy-drive.net",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.DeploymentGetConfig2DeploymentsResponse200Type](../../models/operations/deploymentgetconfig2deploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `imageUrl`                                                                                                                             | [operations.DeploymentGetConfig2ImageUrl](../../models/operations/deploymentgetconfig2imageurl.md)                                     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |