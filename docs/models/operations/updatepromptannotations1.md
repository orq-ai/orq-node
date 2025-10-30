# UpdatePromptAnnotations1

## Example Usage

```typescript
import { UpdatePromptAnnotations1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 816795,
  endIndex: 86924,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.UpdatePromptAnnotationsType](../../models/operations/updatepromptannotationstype.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `text`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `fileCitation`                                                                                                   | [operations.UpdatePromptAnnotationsFileCitation](../../models/operations/updatepromptannotationsfilecitation.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startIndex`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endIndex`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |