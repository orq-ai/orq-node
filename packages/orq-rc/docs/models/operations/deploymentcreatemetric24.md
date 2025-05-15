# DeploymentCreateMetric24

## Example Usage

```typescript
import { DeploymentCreateMetric24 } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetric24 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.DeploymentCreateMetric2DeploymentsMetricsRequestRequestBodyType](../../models/operations/deploymentcreatemetric2deploymentsmetricsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                                                       | The type of the content part. Always `file`.                                                                                                                             |
| `file`                                                                                                                                                                   | [operations.DeploymentCreateMetric2File](../../models/operations/deploymentcreatemetric2file.md)                                                                         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |