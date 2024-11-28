# CreatePromptVersion2Prompts2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePromptVersion2Prompts2 } from "@orq-ai/node/models/operations";

let value: CreatePromptVersion2Prompts2 = {
  type: "image_url",
  imageUrl: {
    url: "https://dapper-armchair.biz",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.CreatePromptVersion2PromptsResponse200Type](../../models/operations/createpromptversion2promptsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `imageUrl`                                                                                                                     | [operations.CreatePromptVersion2PromptsImageUrl](../../models/operations/createpromptversion2promptsimageurl.md)               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |