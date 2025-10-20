# UpdatePrompt2PromptsResponse3

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse3 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2PromptsResponse3 = {
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
| `file`                                                                                                                                         | [operations.UpdatePrompt2PromptsResponseFile](../../models/operations/updateprompt2promptsresponsefile.md)                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |