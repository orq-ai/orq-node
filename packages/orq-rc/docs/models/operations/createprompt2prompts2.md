# CreatePrompt2Prompts2

## Example Usage

```typescript
import { CreatePrompt2Prompts2 } from "@orq-ai/node/models/operations";

let value: CreatePrompt2Prompts2 = {
  type: "image_url",
  imageUrl: {
    url: "https://intrepid-swordfish.name/",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreatePrompt2PromptsRequestRequestBodyPromptType](../../models/operations/createprompt2promptsrequestrequestbodyprompttype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `imageUrl`                                                                                                                                 | [operations.CreatePrompt2PromptsImageUrl](../../models/operations/createprompt2promptsimageurl.md)                                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |