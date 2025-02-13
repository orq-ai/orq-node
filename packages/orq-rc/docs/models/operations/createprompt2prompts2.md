# CreatePrompt2Prompts2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePrompt2Prompts2 } from "@orq-ai/node/models/operations";

let value: CreatePrompt2Prompts2 = {
  type: "image_url",
  imageUrl: {
    url: "https://stylish-wallaby.org",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.CreatePrompt2PromptsResponse200Type](../../models/operations/createprompt2promptsresponse200type.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `imageUrl`                                                                                                       | [operations.CreatePrompt2PromptsImageUrl](../../models/operations/createprompt2promptsimageurl.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |