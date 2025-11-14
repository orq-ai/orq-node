# InvokeDeploymentRequestAnnotations2

## Example Usage

```typescript
import { InvokeDeploymentRequestAnnotations2 } from "@orq-ai/node/models/components";

let value: InvokeDeploymentRequestAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 736692,
  endIndex: 171464,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [components.InvokeDeploymentRequestAnnotationsMessages4Type](../../models/components/invokedeploymentrequestannotationsmessages4type.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `text`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `filePath`                                                                                                                               | [components.AnnotationsFilePath](../../models/components/annotationsfilepath.md)                                                         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `startIndex`                                                                                                                             | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `endIndex`                                                                                                                               | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |