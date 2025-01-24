# CreatePromptVersion22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePromptVersion22 } from "@orq-ai/node/models/operations";

let value: CreatePromptVersion22 = {
  type: "image_url",
  imageUrl: {
    url: "https://alert-apparatus.org/",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreatePromptVersion2PromptsType](../../models/operations/createpromptversion2promptstype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `imageUrl`                                                                                               | [operations.CreatePromptVersion2ImageUrl](../../models/operations/createpromptversion2imageurl.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |