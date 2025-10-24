# CreatePrompt2PromptsResponse3

## Example Usage

```typescript
import { CreatePrompt2PromptsResponse3 } from "@orq-ai/node/models/operations";

let value: CreatePrompt2PromptsResponse3 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.CreatePrompt2PromptsResponse200ApplicationJSONType](../../models/operations/createprompt2promptsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                             | The type of the content part. Always `file`.                                                                                                   |
| `file`                                                                                                                                         | [operations.CreatePrompt2PromptsResponseFile](../../models/operations/createprompt2promptsresponsefile.md)                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |