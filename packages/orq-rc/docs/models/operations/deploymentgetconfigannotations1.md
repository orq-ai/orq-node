# DeploymentGetConfigAnnotations1

## Example Usage

```typescript
import { DeploymentGetConfigAnnotations1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 945183,
  endIndex: 623415,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.DeploymentGetConfigAnnotationsDeploymentsType](../../models/operations/deploymentgetconfigannotationsdeploymentstype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `text`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fileCitation`                                                                                                                       | [operations.AnnotationsFileCitation](../../models/operations/annotationsfilecitation.md)                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `startIndex`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `endIndex`                                                                                                                           | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |