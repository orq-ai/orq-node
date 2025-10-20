# CreatePromptAnnotations1

## Example Usage

```typescript
import { CreatePromptAnnotations1 } from "@orq-ai/node/models/operations";

let value: CreatePromptAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 177247,
  endIndex: 468125,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.CreatePromptAnnotationsType](../../models/operations/createpromptannotationstype.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `text`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `fileCitation`                                                                                                   | [operations.CreatePromptAnnotationsFileCitation](../../models/operations/createpromptannotationsfilecitation.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startIndex`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `endIndex`                                                                                                       | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |