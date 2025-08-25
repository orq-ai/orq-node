# DeploymentsAnnotations1

## Example Usage

```typescript
import { DeploymentsAnnotations1 } from "@orq-ai/node/models/components";

let value: DeploymentsAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 850856,
  endIndex: 168346,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.DeploymentsAnnotationsMessagesType](../../models/components/deploymentsannotationsmessagestype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `fileCitation`                                                                                                 | [components.AnnotationsFileCitation](../../models/components/annotationsfilecitation.md)                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startIndex`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `endIndex`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |