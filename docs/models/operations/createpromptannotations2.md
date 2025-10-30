# CreatePromptAnnotations2

## Example Usage

```typescript
import { CreatePromptAnnotations2 } from "@orq-ai/node/models/operations";

let value: CreatePromptAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 230552,
  endIndex: 956569,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.CreatePromptAnnotationsPromptsType](../../models/operations/createpromptannotationspromptstype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `filePath`                                                                                                     | [operations.CreatePromptAnnotationsFilePath](../../models/operations/createpromptannotationsfilepath.md)       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startIndex`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `endIndex`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |