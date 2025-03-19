# DeploymentCreateMetric2DeploymentsMetricsImageUrl

## Example Usage

```typescript
import { DeploymentCreateMetric2DeploymentsMetricsImageUrl } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetric2DeploymentsMetricsImageUrl = {
  url: "https://deserted-teriyaki.name",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                    | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Either a URL of the image or the base64 encoded image data.                                                                              |
| `detail`                                                                                                                                 | [operations.DeploymentCreateMetric2DeploymentsMetricsDetail](../../models/operations/deploymentcreatemetric2deploymentsmetricsdetail.md) | :heavy_minus_sign:                                                                                                                       | Specifies the detail level of the image.                                                                                                 |