# Two3

## Example Usage

```typescript
import { Two3 } from "@orq-ai/node/models/operations";

let value: Two3 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"file"*                                                                     | :heavy_check_mark:                                                           | The type of the content part. Always `file`.                                 |
| `file`                                                                       | [operations.UpdatePrompt2File](../../models/operations/updateprompt2file.md) | :heavy_check_mark:                                                           | N/A                                                                          |