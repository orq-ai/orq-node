# DeploymentGetConfig2DeploymentsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentGetConfig2DeploymentsResponse2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig2DeploymentsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.DeploymentGetConfig2DeploymentsResponse200Type](../../models/operations/deploymentgetconfig2deploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `imageUrl`                                                                                                                             | [operations.DeploymentGetConfig2DeploymentsImageUrl](../../models/operations/deploymentgetconfig2deploymentsimageurl.md)               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |