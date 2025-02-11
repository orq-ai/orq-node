# DeploymentStream22Input

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentStream22Input } from "@orq-ai/node/models/operations";

let value: DeploymentStream22Input = {
  type: "image_url",
  imageUrl: {
    url: "https://grave-birdcage.info",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.DeploymentStream2DeploymentsRequestRequestBodyType](../../models/operations/deploymentstream2deploymentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `imageUrl`                                                                                                                                     | [operations.DeploymentStream2ImageUrlInput](../../models/operations/deploymentstream2imageurlinput.md)                                         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |