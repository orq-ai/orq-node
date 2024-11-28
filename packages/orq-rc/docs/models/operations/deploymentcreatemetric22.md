# DeploymentCreateMetric22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentCreateMetric22 } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetric22 = {
  type: "image_url",
  imageUrl: {
    url: "https://sugary-thongs.net",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.DeploymentCreateMetric2DeploymentsMetricsType](../../models/operations/deploymentcreatemetric2deploymentsmetricstype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `imageUrl`                                                                                                                           | [operations.DeploymentCreateMetric2ImageUrl](../../models/operations/deploymentcreatemetric2imageurl.md)                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |