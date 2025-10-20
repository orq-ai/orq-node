# UpdatePromptAnnotations2

## Example Usage

```typescript
import { UpdatePromptAnnotations2 } from "@orq-ai/node/models/operations";

let value: UpdatePromptAnnotations2 = {
  type: "file_path",
  text: "<value>",
  filePath: {
    fileId: "<id>",
  },
  startIndex: 952817,
  endIndex: 350294,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.UpdatePromptAnnotationsPromptsType](../../models/operations/updatepromptannotationspromptstype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `filePath`                                                                                                     | [operations.UpdatePromptAnnotationsFilePath](../../models/operations/updatepromptannotationsfilepath.md)       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startIndex`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `endIndex`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |