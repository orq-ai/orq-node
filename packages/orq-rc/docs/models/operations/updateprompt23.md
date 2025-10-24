# UpdatePrompt23

## Example Usage

```typescript
import { UpdatePrompt23 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt23 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.UpdatePrompt2PromptsRequestType](../../models/operations/updateprompt2promptsrequesttype.md) | :heavy_check_mark:                                                                                       | The type of the content part. Always `file`.                                                             |
| `file`                                                                                                   | [operations.UpdatePrompt2File](../../models/operations/updateprompt2file.md)                             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |