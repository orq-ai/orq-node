# GetPromptVersion23

## Example Usage

```typescript
import { GetPromptVersion23 } from "@orq-ai/node/models/operations";

let value: GetPromptVersion23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.GetPromptVersion2PromptsResponseType](../../models/operations/getpromptversion2promptsresponsetype.md) | :heavy_check_mark:                                                                                                 | The type of the content part. Always `file`.                                                                       |
| `file`                                                                                                             | [operations.GetPromptVersion2File](../../models/operations/getpromptversion2file.md)                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |