# CreatePrompt23

## Example Usage

```typescript
import { CreatePrompt23 } from "@orq-ai/node/models/operations";

let value: CreatePrompt23 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreatePrompt2PromptsRequestType](../../models/operations/createprompt2promptsrequesttype.md) | :heavy_check_mark:                                                                                       | The type of the content part. Always `file`.                                                             |
| `file`                                                                                                   | [operations.CreatePrompt2File](../../models/operations/createprompt2file.md)                             | :heavy_check_mark:                                                                                       | N/A                                                                                                      |