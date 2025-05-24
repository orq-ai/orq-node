# GetAllPrompts23

## Example Usage

```typescript
import { GetAllPrompts23 } from "@orq-ai/node/models/operations";

let value: GetAllPrompts23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.GetAllPrompts2PromptsResponseType](../../models/operations/getallprompts2promptsresponsetype.md) | :heavy_check_mark:                                                                                           | The type of the content part. Always `file`.                                                                 |
| `file`                                                                                                       | [operations.GetAllPrompts2File](../../models/operations/getallprompts2file.md)                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |