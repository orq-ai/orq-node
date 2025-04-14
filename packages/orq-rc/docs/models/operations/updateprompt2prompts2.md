# UpdatePrompt2Prompts2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { UpdatePrompt2Prompts2 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt2Prompts2 = {
  type: "image_url",
  imageUrl: {
    url: "https://clumsy-hippodrome.info/",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.UpdatePrompt2PromptsResponse200Type](../../models/operations/updateprompt2promptsresponse200type.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `imageUrl`                                                                                                       | [operations.UpdatePrompt2PromptsImageUrl](../../models/operations/updateprompt2promptsimageurl.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |