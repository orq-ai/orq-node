# DeploymentStreamAnnotations1

## Example Usage

```typescript
import { DeploymentStreamAnnotations1 } from "@orq-ai/node/models/operations";

let value: DeploymentStreamAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 716861,
  endIndex: 363637,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.DeploymentStreamAnnotationsType](../../models/operations/deploymentstreamannotationstype.md)                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `text`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `fileCitation`                                                                                                           | [operations.DeploymentStreamAnnotationsFileCitation](../../models/operations/deploymentstreamannotationsfilecitation.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startIndex`                                                                                                             | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `endIndex`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |