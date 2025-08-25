# DeploymentGetConfigAnnotations2

## Example Usage

```typescript
import { DeploymentGetConfigAnnotations2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 55759,
  endIndex: 740672,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [operations.DeploymentGetConfigAnnotationsDeploymentsRequestType](../../models/operations/deploymentgetconfigannotationsdeploymentsrequesttype.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `text`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `filePath`                                                                                                                                         | [operations.AnnotationsFilePath](../../models/operations/annotationsfilepath.md)                                                                   | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `startIndex`                                                                                                                                       | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `endIndex`                                                                                                                                         | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |