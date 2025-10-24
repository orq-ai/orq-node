# UpdatePrompt24

## Example Usage

```typescript
import { UpdatePrompt24 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt24 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [operations.UpdatePrompt2PromptsRequestRequestBodyPromptMessages2Type](../../models/operations/updateprompt2promptsrequestrequestbodypromptmessages2type.md) | :heavy_check_mark:                                                                                                                                           | The type of the content part. Always `file`.                                                                                                                 |
| `file`                                                                                                                                                       | [operations.UpdatePrompt2PromptsFile](../../models/operations/updateprompt2promptsfile.md)                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |