# DeploymentCreateMetricAnnotations1

## Example Usage

```typescript
import { DeploymentCreateMetricAnnotations1 } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 197003,
  endIndex: 73267,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.DeploymentCreateMetricAnnotationsType](../../models/operations/deploymentcreatemetricannotationstype.md)                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `text`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fileCitation`                                                                                                                       | [operations.DeploymentCreateMetricAnnotationsFileCitation](../../models/operations/deploymentcreatemetricannotationsfilecitation.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `startIndex`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `endIndex`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |