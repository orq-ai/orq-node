# CreateChatCompletionAnnotations1

## Example Usage

```typescript
import { CreateChatCompletionAnnotations1 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionAnnotations1 = {
  type: "file_citation",
  text: "<value>",
  fileCitation: {
    fileId: "<id>",
  },
  startIndex: 679793,
  endIndex: 171016,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.CreateChatCompletionAnnotationsType](../../models/operations/createchatcompletionannotationstype.md)                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `text`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fileCitation`                                                                                                                   | [operations.CreateChatCompletionAnnotationsFileCitation](../../models/operations/createchatcompletionannotationsfilecitation.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `startIndex`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `endIndex`                                                                                                                       | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |