# DeploymentsAnnotations2

## Example Usage

```typescript
import { DeploymentsAnnotations2 } from "@orq-ai/node/models/components";

let value: DeploymentsAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 875798,
  endIndex: 835446,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.DeploymentsAnnotationsMessages4Type](../../models/components/deploymentsannotationsmessages4type.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `text`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `filePath`                                                                                                       | [components.AnnotationsFilePath](../../models/components/annotationsfilepath.md)                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startIndex`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endIndex`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |