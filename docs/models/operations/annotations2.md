# Annotations2

## Example Usage

```typescript
import { Annotations2 } from "@orq-ai/node/models/operations";

let value: Annotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 702427,
  endIndex: 399898,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.DeploymentGetConfigAnnotationsType](../../models/operations/deploymentgetconfigannotationstype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `filePath`                                                                                                     | [operations.FilePath](../../models/operations/filepath.md)                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startIndex`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `endIndex`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |