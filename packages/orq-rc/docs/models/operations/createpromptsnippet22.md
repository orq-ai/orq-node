# CreatePromptSnippet22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { CreatePromptSnippet22 } from "@orq-ai/node/models/operations";

let value: CreatePromptSnippet22 = {
  type: "image_url",
  imageUrl: {
    url: "https://alive-flint.name/",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.CreatePromptSnippet2PromptSnippetsType](../../models/operations/createpromptsnippet2promptsnippetstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `imageUrl`                                                                                                             | [operations.CreatePromptSnippet2ImageUrl](../../models/operations/createpromptsnippet2imageurl.md)                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |