# DeploymentCreateMetricToolCalls

## Example Usage

```typescript
import { DeploymentCreateMetricToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `index`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.DeploymentCreateMetricType](../../models/operations/deploymentcreatemetrictype.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `function`                                                                                             | [operations.DeploymentCreateMetricFunction](../../models/operations/deploymentcreatemetricfunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |