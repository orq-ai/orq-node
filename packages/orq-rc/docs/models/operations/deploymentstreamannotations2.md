# DeploymentStreamAnnotations2

## Example Usage

```typescript
import { DeploymentStreamAnnotations2 } from "@orq-ai/node/models/operations";

let value: DeploymentStreamAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 436793,
  endIndex: 312182,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.DeploymentStreamAnnotationsDeploymentsType](../../models/operations/deploymentstreamannotationsdeploymentstype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `text`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `filePath`                                                                                                                     | [operations.DeploymentStreamAnnotationsFilePath](../../models/operations/deploymentstreamannotationsfilepath.md)               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `startIndex`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `endIndex`                                                                                                                     | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |