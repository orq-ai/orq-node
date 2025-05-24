# CreatePrompt2Prompts3

## Example Usage

```typescript
import { CreatePrompt2Prompts3 } from "@orq-ai/node/models/operations";

let value: CreatePrompt2Prompts3 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.CreatePrompt2PromptsResponse200ApplicationJSONType](../../models/operations/createprompt2promptsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                             | The type of the content part. Always `file`.                                                                                                   |
| `file`                                                                                                                                         | [operations.CreatePrompt2PromptsFile](../../models/operations/createprompt2promptsfile.md)                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |