# UpdatePrompt2Prompts3

## Example Usage

```typescript
import { UpdatePrompt2Prompts3 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2Prompts3 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.UpdatePrompt2PromptsResponse200ApplicationJSONType](../../models/operations/updateprompt2promptsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                             | The type of the content part. Always `file`.                                                                                                   |
| `file`                                                                                                                                         | [operations.UpdatePrompt2PromptsFile](../../models/operations/updateprompt2promptsfile.md)                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |