# DeploymentCreateMetricAnnotations2

## Example Usage

```typescript
import { DeploymentCreateMetricAnnotations2 } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 845140,
  endIndex: 310146,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [operations.DeploymentCreateMetricAnnotationsDeploymentsMetricsType](../../models/operations/deploymentcreatemetricannotationsdeploymentsmetricstype.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `text`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `filePath`                                                                                                                                               | [operations.DeploymentCreateMetricAnnotationsFilePath](../../models/operations/deploymentcreatemetricannotationsfilepath.md)                             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `startIndex`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `endIndex`                                                                                                                                               | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |