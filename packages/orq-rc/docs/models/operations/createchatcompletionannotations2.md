# CreateChatCompletionAnnotations2

## Example Usage

```typescript
import { CreateChatCompletionAnnotations2 } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 979930,
  endIndex: 247803,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.CreateChatCompletionAnnotationsProxyType](../../models/operations/createchatcompletionannotationsproxytype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `text`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `filePath`                                                                                                                 | [operations.CreateChatCompletionAnnotationsFilePath](../../models/operations/createchatcompletionannotationsfilepath.md)   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `startIndex`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endIndex`                                                                                                                 | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |