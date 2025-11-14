# InvokeDeploymentRequestAnnotations1

## Example Usage

```typescript
import { InvokeDeploymentRequestAnnotations1 } from "@orq-ai/node/models/components";

let value: InvokeDeploymentRequestAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 102759,
  endIndex: 928876,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [components.InvokeDeploymentRequestAnnotationsMessagesType](../../models/components/invokedeploymentrequestannotationsmessagestype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `text`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fileCitation`                                                                                                                         | [components.AnnotationsFileCitation](../../models/components/annotationsfilecitation.md)                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `startIndex`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `endIndex`                                                                                                                             | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |