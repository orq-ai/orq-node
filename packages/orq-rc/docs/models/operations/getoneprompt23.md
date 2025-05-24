# GetOnePrompt23

## Example Usage

```typescript
import { GetOnePrompt23 } from "@orq-ai/node/models/operations";

let value: GetOnePrompt23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.GetOnePrompt2PromptsResponseType](../../models/operations/getoneprompt2promptsresponsetype.md) | :heavy_check_mark:                                                                                         | The type of the content part. Always `file`.                                                               |
| `file`                                                                                                     | [operations.GetOnePrompt2File](../../models/operations/getoneprompt2file.md)                               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |