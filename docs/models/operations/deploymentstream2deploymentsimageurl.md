# DeploymentStream2DeploymentsImageUrl

## Example Usage

```typescript
import { DeploymentStream2DeploymentsImageUrl } from "@orq-ai/node/models/operations";

let value: DeploymentStream2DeploymentsImageUrl = {
  url: "https://deficient-wasabi.biz/",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Either a URL of the image or the base64 encoded image data.                                                    |
| `detail`                                                                                                       | [operations.DeploymentStream2DeploymentsDetail](../../models/operations/deploymentstream2deploymentsdetail.md) | :heavy_minus_sign:                                                                                             | Specifies the detail level of the image.                                                                       |