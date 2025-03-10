# Message3

## Example Usage

```typescript
import { Message3 } from "@orq-ai/node/models/operations";

let value: Message3 = {
  type: "image",
  role: "exception",
  url: "https://steep-best-seller.name/",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [operations.DeploymentCreateMetricMessageDeploymentsMetricsRequestType](../../models/operations/deploymentcreatemetricmessagedeploymentsmetricsrequesttype.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `role`                                                                                                                                                         | [operations.DeploymentCreateMetricMessageDeploymentsMetricsRole](../../models/operations/deploymentcreatemetricmessagedeploymentsmetricsrole.md)               | :heavy_check_mark:                                                                                                                                             | The role of the prompt message                                                                                                                                 |
| `url`                                                                                                                                                          | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |