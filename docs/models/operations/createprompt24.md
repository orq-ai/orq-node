# CreatePrompt24

## Example Usage

```typescript
import { CreatePrompt24 } from "@orq-ai/node/models/operations";

let value: CreatePrompt24 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [operations.CreatePrompt2PromptsRequestRequestBodyPromptMessages2Type](../../models/operations/createprompt2promptsrequestrequestbodypromptmessages2type.md) | :heavy_check_mark:                                                                                                                                           | The type of the content part. Always `file`.                                                                                                                 |
| `file`                                                                                                                                                       | [operations.CreatePrompt2PromptsFile](../../models/operations/createprompt2promptsfile.md)                                                                   | :heavy_check_mark:                                                                                                                                           | File data for the content part. Must contain either file_data or uri, but not both.                                                                          |